"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";

const bookTableSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string("Email is required").email("Invalid email address"),
  table: z.string("Table number is required"),
  guests: z.string("Please enter the number of guests"),
  eventNight: z.string().min(1, "Event night is required"),
  phone: z.e164("Please enter a valid phone number").min(8, "Phone number must be at least 8 digits"),
  content: z.string().min(1, "Comment content is required"),
});

const BookTable = ({ events, setAvailableTables, filteredAvailableTables, setTakenTables, takenTables, numberOfGuest, setNumberOfGuest, tables }) => {
  const params = useSearchParams();
  const eventId = params.get("eventId");

  const handleEventChange = async (e) => {
    const id = e.target.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations?eventId=${id}`);
    const reservations = await response.json();

    const taken = reservations.map((r) => Number(r.table));
    setTakenTables(taken);

    const allTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const available = allTables.filter((t) => !taken.includes(t));
    setAvailableTables(available);
  };

  if (eventId && availableTables.length === 0) {
    (async () => {
      const result = await handleEventChange({ target: { value: eventId } });
      console.log("Ledige borde:", result);
    })();
  }

  const handleGuestChange = (e) => {
    setNumberOfGuest(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(bookTableSchema),
    mode: "onChange",
    defaultValues: {
      eventNight: eventId ?? "",
    },
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetch(`${process.env.api_url}/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        table: data.table,
        guests: data.guests,
        date: "2026-05-09T20:00:00+02:00",
        phone: data.phone,
        eventId: 1,
      }),
    });

    reset();
  };
  return (
    <section>
      <h2>Book a table</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(500px,1fr))] w-full justify-center">
        <div>
          <input {...register("name")} type="text" name="name" placeholder="Your name" />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input {...register("email")} type="text" name="email" placeholder="Your email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <select {...register("eventNight")} name="eventNight" onChange={handleEventChange}>
            <option value="">Select event night</option>

            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}
                {event.date}
              </option>
            ))}
          </select>
          {errors.eventNight && <p>{errors.eventNight.message} </p>}
        </div>
        <div>
          <select {...register("guests")} name="guests" onChange={handleGuestChange}>
            <option value="">Number of guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          {errors.guests && <p>{errors.guests.message}</p>}
        </div>
        <div>
          <select {...register("table")} name="table">
            <option value="">Select table</option>
            {filteredAvailableTables.map((table) => (
              <option key={table} value={table}>
                Bord {table}
              </option>
            ))}
          </select>
          {filteredAvailableTables.length === 0 && <p>Der er ingen borde der passer til dit valg</p>}
          {errors.table && <p>{errors.table.message}</p>}
        </div>
        <div>
          <input {...register("phone")} type="text" name="phone" placeholder="Your phone number" />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className="col-span-full">
          <textarea {...register("content")} type="text" name="content " rows={5} placeholder="Your comment" />
          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sender..." : "Send"}
        </button>{" "}
      </form>
    </section>
  );
};

export default BookTable;

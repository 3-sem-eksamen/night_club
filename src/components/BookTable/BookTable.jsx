"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";

const bookTableSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string("Email is required").email("Invalid email address"),
  table: z.string("Table number is required"),
  guests: z.string("Please enter the number of guests"),
  eventNight: z.string().min(1, "Event night is required"),
  phone: z.e164("Please enter a valid phone number").min(8, "Phone number must be at least 8 digits"),
  content: z.string().min(1, "Comment content is required"),
});

const BookTable = ({ id }) => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(bookTableSchema),
    mode: "onChange",

  });

  

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetch("http://localhost:4000/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        table: data.table,        
        guests: data.guests,
        date: "2026-05-09T20:00:00+02:00",
        phone: data.phone,
        eventId: 1      }),
    });

    reset();
  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Booking for: {eventData ? eventData.name : "Loading..."}</h2>
        <input {...register("name")} type="text" name="name" placeholder="Your name" />
        {errors.name && <p>{errors.name.message}</p>}
        <input {...register("email")} type="text" name="email" placeholder="Your email" />
        {errors.email && <p>{errors.email.message}</p>}
        <select {...register("eventNight")} name="eventNight">
          <option value="">Select event night</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
        {errors.eventNight && <p>{errors.eventNight.message}</p>}
        <select {...register("guests")} name="guests">
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
        <select {...register("table")} name="table">
          <option value="">Select table</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>  
         {errors.table && <p>{errors.table.message}</p>}

        <input {...register("phone")} type="text" name="phone" placeholder="Your phone number" />
        {errors.phone && <p>{errors.phone.message}</p>}
        <input {...register("content")} type="text" name="content" placeholder="Your comment" />
        {errors.content && <p>{errors.content.message}</p>}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sender..." : "Send"}
        </button>      </form>
    </section>
  );
};

export default BookTable;

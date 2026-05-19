"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const NewsletterSchema = z.object({
  email: z
    .string("Email is required")
    .email("Invalid email address")
    .refine(
      async (email) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletters?email=${email}`, { cache: "no-store" });
        const dataEmail = await response.json();
        return dataEmail.length === 0;
      },
      { message: "This email is already subscribed" }
    ),
});

const NewsContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(NewsletterSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const date = new Date().toISOString();
    console.log(data);
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletters`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
      }),
    });

    reset();
  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="text" name="email" placeholder="Your email" />
        {errors.email && <p>{errors.email.message}</p>}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default NewsContainer;

"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";

const commentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string("Email is required").email("Invalid email address"),
  content: z.string().min(1, "Comment content is required"),
});

const CommentContainer = () => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(commentSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const date = new Date().toISOString();
    console.log(data);
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: params.id,
        name: data.name,
        content: data.content,
        date: date,
      }),
    });

    reset();
  };
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} type="text" name="name" placeholder="Your name" />
        {errors.name && <p>{errors.name.message}</p>}
        <input {...register("email")} type="text" name="email" placeholder="Your email" />
        {errors.email && <p>{errors.email.message}</p>}
        <textarea {...register("content")} name="content" rows={4} placeholder="Your comment" />
        {errors.content && <p>{errors.content.message}</p>}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sender..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default CommentContainer;

"use client";
import Form from "next/form";
import action from "@/app/action";
import { useActionState } from "react";

const NewsContainer = () => {
  const [state, emailAction, isPending] = useActionState(action, { message: "" });
  return (
    <section>
      <h3>Want the latest night club news</h3>
      <p>
        Subscribe to our newsletter and never miss an <span>Event</span>
      </p>
      <Form action={emailAction}>
        <input type="text" name="email" placeholder="Enter your email" />
        {state?.message && <span>{state.message}</span>}
        <button type="submit">{isPending ? "Submitting.." : "Submit"}</button>
      </Form>
    </section>
  );
};

export default NewsContainer;

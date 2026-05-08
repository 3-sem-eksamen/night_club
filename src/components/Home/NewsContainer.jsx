"use client"
import Form from "next/form";
import { useActionState, useactionState } from "react";

const NewsContainer = () => {
    const [state, emailAction, isPending] = useActionState(action, {message:""});
    return ( 
        <section>
            <h3>Want the latest night club news</h3>
            <p>Subscribe to our newsletter and never miss an <span>Event</span></p>
            <Form action={emailAction}>
                <input type="text" name="email" placeholder="Enter your email"/>
                {state?.message && (
                    <p>${state.succes}</p>
                )}
                <button type="submit" {isPending ? "Submitting ..." : "Submit"}></button>
            </Form>

        </section>
     );
}
 
export default NewsContainer;
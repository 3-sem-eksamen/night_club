import Form from "next/form";
import { useActionState } from "react";
import commentaction from "@/app/commentaction";

const CommentContainer = () => {
  const [commentstate, commentAction, isPending] = useActionState(commentaction, { message: "" });
  return (
    <section>
      <Form />
      <input type="text" name="name" placeholder="Your name" />
      <input type="text" name="email" placeholder="Your email" />
      <textarea name="content" rows={4} placeholder="Your comment" />
      <button type="submit">{isPending ? "Submitting.." : "Submit"}</button>
      <Form />
    </section>
  );
};

export default CommentContainer;

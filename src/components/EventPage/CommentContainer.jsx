import Form from "next/form";

const CommentContainer = () => {
  return (
    <section>
      <Form />
      <input type="text" name="name" placeholder="Your name" />
      <input type="text" name="email" placeholder="Your email" />
      <textarea name="comment" rows={4} placeholder="Your comment" />
      <button type="submit">{isPending ? "Submitting.." : "Submit"}</button>
      <Form />
    </section>
  );
};

export default CommentContainer;

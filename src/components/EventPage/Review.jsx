const Review = ({ name, date, content }) => {
  return (
    <section>
      <h3>
        {name}
        <span>{date}</span>
      </h3>
      <p>{content}</p>
    </section>
  );
};

export default Review;

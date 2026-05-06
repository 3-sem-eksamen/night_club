import Review from "./Review";

const ReviewContainer = () => {
  return (
    <section>
      <span></span>
      <h2>Comments</h2>
      <FetchReview />
    </section>
  );
};

const FetchReview = async () => {
  "use server";
  const response = await fetch("http://localhost:4000/comments");
  const Reviews = await response.json();

  return Reviews.map((review) => {
    return (
      <div key={review.id}>
        <Review name={review.name} date={review.date} content={review.content} />
      </div>
    );
  });
};

export default ReviewContainer;

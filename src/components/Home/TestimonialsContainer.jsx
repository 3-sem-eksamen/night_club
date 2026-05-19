import TestimonialsCard from "./TestimonialsCard";

const TestimonialsContainer = () => {
  return (
      <FetchTestimonials />
  );
};

const FetchTestimonials  = async () => {
  "use server";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  const Testimonials = await response.json();

  return Testimonials.map((testimonial) => {
    return (
      <div key={testimonial.id}>
        <TestimonialsCard name={testimonial.name} content={testimonial.content} img={testimonial.asset.url} facebookLink={testimonial.facebook} twitterLink={testimonial.twitter} />
      </div>
    );
  });
};

export default TestimonialsContainer;

import Footer from "@/components/GlobalComponents/Footer/Footer";
import CommentContainer from "@/components/EventPage/CommentContainer";
import EventDetailCard from "@/components/EventPage/EventDetailCard";
import ReviewContainer from "@/components/EventPage/ReviewContainer";
import PrimaryBtn from "@/components/GlobalComponents/PrimaryBtn";
import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";
import Link from "next/link";

export default async function EventPage({ params }) {
  const { slug, id } = await params;

  return (
    <section className="max-w-5xl mx-auto">
      <Header />
      <Subhero />
      <EventDetailCard id={id} />
      <Link href={`/BookTable?eventId=${id}`}>
        <PrimaryBtn text="Book table" />
      </Link>
      <ReviewContainer />
      <CommentContainer />
      <Footer />
    </section>
  );
}

import Header from "@/components/GlobalComponents/Header";
import WelcomeContainer from "@/components/Home/WelcomeContainer";
import FeaturedContainer from "@/components/Home/FeaturedContainer";
import GalleryContainer from "@/components/Home/GalleryContainer";
import TrackContainer from "@/components/Home/TrackContainer";
import VideoContainer from "@/components/Home/VideoContainer";
import TestimonialsContainer from "@/components/Home/TestimonialsContainer";
import NewsContainer from "@/components/Home/NewsContainer";
import CommentContainer from "@/components/EventPage/CommentContainer";
import BookTable from "@/components/BookTable/BookTableForm";
import EventsOfTheMonthContainer from "@/components/Home/EventsOfTheMonthContainer";
import FeaturedCard from "@/components/Home/FeaturedCard";
import Footer from "@/components/GlobalComponents/Footer/Footer";

export default function Home() {
  return (
    <section>
      <Header />
      <TrackContainer />
      <Footer />
    </section>
  );
}

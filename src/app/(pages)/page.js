import Header from "@/components/GlobalComponents/Header";
import WelcomeContainer from "@/components/Home/WelcomeContainer";
import FeaturedContainer from "@/components/Home/FeaturedContainer";
import GalleryContainer from "@/components/Home/GalleryContainer";
import TrackContainer from "@/components/Home/TrackContainer";
import VideoContainer from "@/components/Home/VideoContainer";
import TestimonialsContainer from "@/components/Home/TestimonialsContainer";
import NewsContainer from "@/components/Home/NewsContainer";
import CommentContainer from "@/components/EventPage/CommentContainer";

export default function Home() {
  return (
    <section>
      <Header />
      {/* <WelcomeContainer /> */}
      {/* <FeaturedContainer /> */}
      <GalleryContainer />
      {/* <TrackContainer /> */}
      <VideoContainer />
      <TestimonialsContainer />
      <NewsContainer />
      <CommentContainer />
    </section>
  );
}

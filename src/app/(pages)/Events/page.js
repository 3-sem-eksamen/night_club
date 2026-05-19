import EventCard from "@/components/Events/EventCard";
import EventContainer from "@/components/Events/EventContainer";
import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";
import Footer from "@/components/GlobalComponents/Footer/Footer";

export default function Events() {
  return (
    <section>
      <Header />
      <Subhero title="Events" />
      <EventContainer />
      <Footer />
    </section>
  );
}

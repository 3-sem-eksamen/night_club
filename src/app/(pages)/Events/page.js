import EventContainer from "@/components/Events/EventContainer";
import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";

export default function Home() {
  return (
    <section>
      <Header />
      <Subhero />
      <EventContainer />
    </section>
  );
}

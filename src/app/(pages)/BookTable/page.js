import TablesContainer from "@/components/BookTable/TablesContainer";
import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";
import BookTable from "@/components/BookTable/BookTable";

export default function BookTablePage({ searchParams }) {
  return (
    <section>
      <Header />
      <Subhero />
      <TablesContainer />
      <BookTable id={searchParams.eventId} />
    </section>
  );
}

import TablesContainer from "@/components/BookTable/TablesContainer";
import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";
import BookTable from "@/components/BookTable/BookTableForm";
import BookTableContainer from "@/components/BookTable/BookTableContainer";

export default async function BookTablePage() {
  const response = await fetch("http://localhost:4000/events");
  const events = await response.json();
  return (
    <section>
      <Header />
      <Subhero />
      <BookTableContainer events={events} />
    </section>
  );
}

import TablesContainer from "@/components/BookTable/TablesContainer";
import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";
import BookTable from "@/components/BookTable/BookTable";

export default function Home() {
  return (
    <section>
      <Header />
      <Subhero />
      <TablesContainer />
      <BookTable />
    </section>
  );
}

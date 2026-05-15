import EventDetailCard from "@/components/EventPage/EventDetailCard";
import Link from "next/link";

export default async function EventPage({ params }) {
  const { slug, id } = await params;

  return (
    <section>
      <EventDetailCard id={id} />
      <Link href={`/BookTable?eventId=${id}`}>
        <button>Book Table</button>
      </Link>
    </section>
  );
}

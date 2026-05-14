import Link from "next/link";

export default async function EventPage({ params }) {
  const { slug, id } = await params;

  return (
    <section>
      <Link href={`/BookTable?eventId=${id}`}>
        <button>Book Table</button>
      </Link>
    </section>
  );
}

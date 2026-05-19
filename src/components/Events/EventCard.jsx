"use client";
import Image from "next/image";
import { eventDate } from "../../app/dateConverter.js";
import Link from "next/link.js";
import PrimaryBtn from "../GlobalComponents/PrimaryBtn.jsx";

const EventCard = ({ title, date, location, description, img, imgalt, slug, id }) => {
  return (
    <article className="flex flex-wrap even:flex-row-reverse">
      <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`} alt={imgalt} width={500} height={500} className="min-w-[500px] flex-1 object-cover" />

      <div className="min-w-[500px] flex-1 flex flex-col gap-2 p-4">
        <h2>{title}</h2>

        <h3>
          <span className="text-[var(--color-surface-highlight-primary)]">{eventDate(date)} | </span>
          {location}
        </h3>

        <p>{description}</p>

        <Link className="mx-auto" href={`/EventPage/${slug}/${id}`}>
          <PrimaryBtn text="Read more" />
        </Link>
      </div>
    </article>
  );
};

export default EventCard;

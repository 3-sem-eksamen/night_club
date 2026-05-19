import Image from "next/image";
import { eventDate } from "@/app/dateConverter";

const EventDetailCard = async ({ id }) => {
  const response = await fetch(`${process.env.api_url}/events/${id}`);
  const event = await response.json();

  return (
    <section className="text-white px-6 py-12 space-y-12">
      <div className="w-full overflow-hidden">
        <Image
          src={`${process.env.api_url}${event.heroAsset.url}`}
          alt={event.title}
          width={event.heroAsset.width}
          height={event.heroAsset.height}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-2">
        <span className="text-[oklch(var(--color-surface-highlight-primary))] text-sm uppercase tracking-widest">
          {event.category}
        </span>

        <h1 className="text-4xl font-bold">{event.title}</h1>

        <span className="text-lg text-[oklch(var(--color-surface-highlight-primary))]">
          {eventDate(event.date)}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="px-3 py-2 text-center bg-white/5 border border-[oklch(var(--color-surface-highlight-primary))]">
          <span className="block text-[var(--color-surface-highlight-primary)] text-[11px] uppercase tracking-wide font-medium">
            Doors opening
          </span>
          <span className="block text-sm font-semibold">{eventDate(event.doorsOpen)}</span>
        </div>

        <div className="px-3 py-2 text-center bg-white/5 border border-[oklch(var(--color-surface-highlight-primary))]">
          <span className="block text-[oklch(var(--color-surface-highlight-primary))] text-[11px] uppercase tracking-wide font-medium">
            Location
          </span>
          <span className="block text-sm font-semibold">{event.location}</span>
        </div>

        <div className="px-3 py-2 text-center bg-white/5 border border-[oklch(var(--color-surface-highlight-primary))]">
          <span className="block text-[oklch(var(--color-surface-highlight-primary))] text-[11px] uppercase tracking-wide font-medium">
            Price
          </span>
          <span className="block text-sm font-semibold">{event.price}</span>
        </div>

        <div className="px-3 py-2 text-center bg-white/5 border border-[oklch(var(--color-surface-highlight-primary))]">
          <span className="block text-[oklch(var(--color-surface-highlight-primary))] text-[11px] uppercase tracking-wide font-medium">
            Age limit
          </span>
          <span className="block text-sm font-semibold">{event.ageLimit}</span>
        </div>
      </div>

      <p className="text-xl text-[oklch(var(--color-surface-highlight-primary))]">
        {event.excerpt}
      </p>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-[oklch(var(--color-surface-highlight-primary))]">
          Lineup
        </h2>

        <div className="flex gap-4 overflow-x-auto whitespace-nowrap py-2">
          {event.lineup.map((artist, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white/5 border border-[oklch(var(--color-surface-highlight-primary))] flex-shrink-0"
            >
              {artist}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-[oklch(var(--color-surface-highlight-primary))]">
          Program
        </h2>

        <ul className="space-y-3">
          {event.schedule.map((item, index) => (
            <li
              key={index}
              className="flex justify-between p-4 bg-white/5 border border-[oklch(var(--color-surface-highlight-primary))]"
            >
              <span className="font-semibold text-[oklch(var(--color-surface-highlight-primary))]">
                {item.time}
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 text-lg">
        <p>{event.description}</p>
        <p>{event.content}</p>
      </div>
    </section>
  );
};

export default EventDetailCard;

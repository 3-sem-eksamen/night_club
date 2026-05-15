import Image from "next/image";

const EventDetailCard = async ({ id }) => {
  const response = await fetch(`http://localhost:4000/events/${id}`);
  const event = await response.json();
  console.log("hej", event.schedule[1].time);
  return (
    <section>
      <Image src={`http://localhost:4000${event.heroAsset.url}`} width={event.heroAsset.width} height={event.heroAsset.height} />

      <h2>{event.title}</h2>
      <h3>{event.excerpt}</h3>
      <p>{event.description}</p>
      <p>{event.content}</p>
      <span>{event.date}</span>
      <span>{event.doorsOpen}</span>
      <span>{event.location}</span>
      <span>{event.category}</span>
      <ul>
        {event.lineup.map((lineup, index) => (
          <li key={index}>{lineup}</li>
        ))}
      </ul>

      <ul>
        {event.schedule.map((item, index) => (
          <li key={index}>
            {item.time} – {item.label}
          </li>
        ))}
      </ul>
      <span>{event.price}</span>
      <span>{event.ageLimited}</span>
    </section>
  );
};

export default EventDetailCard;

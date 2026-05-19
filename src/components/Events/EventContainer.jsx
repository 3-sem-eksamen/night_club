import EventCard from "./EventCard";
const EventContainer = () => {
    return ( 
        <div>
            <FetchEvent />
        </div>
     );
}

const FetchEvent = async ()=>{
    "use server"
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`)
    const events = await response.json()
    console.log(events[1].asset.url)

    return events.map((event)=>{
        return (
        <div key={event.id}>
        <EventCard title={event.title} date={event.date} location={event.location} description={event.description} img={event.asset.url} imgalt={event.asset.alt} slug={event.slug} id={event.id}/>
        </div>
        );
    });
};
 
export default EventContainer;
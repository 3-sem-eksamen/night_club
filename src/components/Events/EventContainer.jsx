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
    const response = await fetch("http://localhost:4000/events")
    const events = await response.json()

    return events.map((event)=>{
        return (
        <div key={event.id}>
        (<EventCard title={event.title} date={event.date} location={event.location} description={event.description} image={event.asset.url} imgalt={event.asset.alt}/>)
        </div>
        );
    });
};
 
export default EventContainer;
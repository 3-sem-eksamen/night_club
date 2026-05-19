import EventsOfTheMonthCard from "@/components/Home/EventsOfTheMonthCard"
const EventsOfTheMonthContainer = () => {
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

    return events.map((event)=>{
        return (
        <div key={event.id}>
        <EventsOfTheMonthCard title={event.title} date={event.date}  eventImg={event.asset.url} imgalt={event.asset.alt}/>
        </div>
        );
    });
};
 
export default EventsOfTheMonthContainer;
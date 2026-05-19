import FeaturedCard from "@/components/Home/FeaturedCard";

const FeaturedContiner = () => {
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

    const featuredEvents = events.filter(event => event.isFeatured === true);
    console.log(featuredEvents)

    return featuredEvents.map((event)=>{
        return (
        <div key={event.id}>
        <FeaturedCard title={event.title} date={event.date}  eventImg={event.asset.url} imgalt={event.asset.alt}/>
        </div>
        );
    });
};
 
export default FeaturedContiner;
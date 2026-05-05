import Image from "next/image";

const EventCard = () => {
    return (  
        <div className="grid grid-cols-2 gap-4">
            <Image src="/assets/content-img/blog_full1.jpg" alt="Produkt billede" className="w-full h-full object-cover" width={500} height={500} />
            <div>
            <h2>Neon Nights Grand Opening</h2>
            <h3><span>May 9 | 21:00</span>CENTER STAGE</h3>
            <p>Night Club opens its doors again with an evening of house, visuals, and live percussion on the main stage. Guests can expect welcome drinks from 21:00, an upgraded lighting setup, and a program that builds toward a big countdown show at midnight.</p>
            <button></button>
            </div>
        </div>
    );
}
 
export default EventCard;
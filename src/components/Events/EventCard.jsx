"use client";

import Image from "next/image";
import { eventDate} from "../../app/dateConverter.js";

const EventCard = ({ title, date, location, description, img, imgalt }) => {
    return (  
        <div className="">
            <Image src={`http://localhost:4000${img}`} alt={imgalt} className="w-full h-full object-cover" width={500} height={500} />
            <div className="max-w-md mx-auto flex flex-col gap-[var(--space-s)]">
            <h2 className="">{title}</h2>
            <h3><span className="text-[var(--color-surface-highlight-primary)]">{eventDate(date)}</span>{location}</h3>
            <p>{description}</p>
            <button></button>
            </div>
        </div>
    );
}

 
export default EventCard;
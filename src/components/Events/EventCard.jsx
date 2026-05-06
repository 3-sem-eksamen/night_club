"use client";

import Image from "next/image";

const EventCard = ({ title, date, location, description, img, imgalt }) => {
    return (  
        <div className="grid grid-cols-2 gap-4">
            <Image src={`http://localhost:4000${img}`} alt={imgalt} className="w-full h-full object-cover" width={500} height={500} />
            <div>
            <h2>{title}</h2>
            <h3><span>{date}</span>{location}</h3>
            <p>{description}</p>
            <button></button>
            </div>
        </div>
    );
}

 
export default EventCard;
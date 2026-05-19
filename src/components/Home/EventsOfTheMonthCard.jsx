"use client"
import Image from "next/image";

const EventsOfTheMonthCard = ({eventImg, title, date, imgalt}) => {
    console.log(eventImg)
    return ( 
         <div>
            <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${eventImg}`} alt={imgalt} className="w-full h-full object-cover" width={500} height={500} />
           <h2>{title}</h2>
           <span>{date}</span>
            </div>
    );
}
 
export default EventsOfTheMonthCard;
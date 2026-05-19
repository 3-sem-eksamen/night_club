"use client"
import Image from "next/image";

const FeaturedCard = ({eventImg, title, date, imgalt}) => {
    console.log(eventImg)
    return ( 
         <div>
            <Image src={`${process.env.api_url}${eventImg}`} alt={imgalt} className="w-full h-full object-cover" width={500} height={500} />
           <h2>{title}</h2>
           <span>{date}</span>
            </div>
    );
}
 
export default FeaturedCard;
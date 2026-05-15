import Image from "next/image";

const ScrollCard = ({img, isActive, onClick}) => {
    return ( 
            <div
            onClick={onClick}>
            
            
            <Image
                src={img.image}
                width={233}
                height={217}
                alt="track thumbnail"
            />
            </div>
     );
}
 
export default ScrollCard;
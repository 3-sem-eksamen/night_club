import Image from "next/image";

const ScrollCard = ({img, key}) => {
    return ( 
        <section>
            <Image
                src={img}
                width={233}
                height={217}
                alt="track thumbnail"
                key={key}
            />
        </section>
     );
}
 
export default ScrollCard;
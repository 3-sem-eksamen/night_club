import Image from "next/image";
const NewsCard = ({img}) => {
    return (  
        <section>
            <Image src={img}
            alt="news image"
            width={100}
            height={91}
            />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
            <span>April 17, 2026</span>
        </section>
    );
}
 
export default NewsCard;
<section>

</section>
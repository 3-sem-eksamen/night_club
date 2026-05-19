import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";


const TestimonialsCard = ({ name, content, img, facebookLink, twitterLink }) => {
    return ( 
        <section>
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`} width={170} height={170} />
        <h3>{name}</h3>
        <p>{content}</p>
        <Link href={facebookLink}><FaFacebookF /></Link>
        <Link href={twitterLink}><FaTwitter /></Link>
        <Link href="https://www.snapchat.com/"><FaSnapchatGhost /></Link>
        </section>
     );
}
 
export default TestimonialsCard;
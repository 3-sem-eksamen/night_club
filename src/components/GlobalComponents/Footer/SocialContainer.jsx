import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const SocialContainer = () => {
    return ( 
        <section>
        <h5>Stay Connected With Us </h5>
        <Link href="https://www.facebook.com/"><FaFacebookF /></Link>
        <Link href="https://www.snapchat.com/"><FaSnapchatGhost /></Link>
        <Link href="https://www.instagram.com/?hl=da"><<FaInstagram /> /></Link>
        </section>
     );
}
 
export default SocialContainer;
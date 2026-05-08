import Image from "next/image";
import NewsContainer from "./NewsContainer";
import PostContainer from "./PostContainer";
import SocialContainer from "./SocialContainer";
const Footer = () => {
    return ( 
        <section>
            <div>
            <Image src="/assets/icon/Logo_main.svg" alt="logo" width={183} height={43} />
            <h3>location</h3>
            <p>Kompagnistræde 278</p>
            <p>1265 Købehavn K</p>
            <h3>Opening Hours</h3>
            <p>WED - THU 10:30 PMTO 3 AM</p>
            <p>SAT - SUN: 11 PM TO 5 AM</p>
            </div>
            <NewsContainer/>
            <PostContainer/>
             <div>
            <SocialContainer/>
             <p>Night Club - All Rights Reserved</p>
            <p>Copyright © NightClub</p>
            </div>

        </section>
     );
}
 
export default Footer;
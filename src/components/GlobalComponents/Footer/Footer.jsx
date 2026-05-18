import Image from "next/image";
import NewsContainer from "./NewsContainer";
import PostContainer from "./PostContainer";
import SocialContainer from "./SocialContainer";
const Footer = () => {
    return ( 
        <section className="flex flex-col items-center text-center">
            <div>
            <Image className="mx-auto" src="/assets/icon/Logo_main.svg" alt="logo" width={183} height={43} />
            <h4>location</h4>
            <p>Kompagnistræde 278</p>
            <p>1265 Købehavn K</p>
            <h4>Opening Hours</h4>
            <p>WED - THU 10:30 PMTO 3 AM</p>
            <p>SAT - SUN: 11 PM TO 5 AM</p>
            </div>
            <div className="hidden md:block">
            <NewsContainer />
            <PostContainer/>
            </div>
             <div>
            <SocialContainer/>
             <p>Night Club - All Rights Reserved</p>
            <p>Copyright © NightClub</p>
            </div>

        </section>
     );
}
 
export default Footer;
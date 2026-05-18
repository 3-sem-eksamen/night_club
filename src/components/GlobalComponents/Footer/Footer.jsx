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
            <h5>Kompagnistræde 278</h5>
            <h5>1265 Købehavn K</h5>
            <h4>Opening Hours</h4>
            <h5>WED - THU 10:30 PMTO 3 AM</h5>
            <h5>SAT - SUN: 11 PM TO 5 AM</h5>
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
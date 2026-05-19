import WelcomeCard from "./WelcomeCard";
import Images from "next/image";

const welcomeimages = [{img:"/assets/content-img/reastaurant_1.jpg"}, {img:"/assets/content-img/thumb1.jpg"}, {img:"/assets/content-img/thumb2.jpg"}];
const WelcomeContainer = () => {
    return ( 
        <section>
            <h2>Welcome in nightclub</h2>
            <Images src="/assets/bottom_line.png" alt="line" width={1364} height={109} />
            {welcomeimages.map((welcomeimage,i) => (<WelcomeCard key={i} img={welcomeimage.img} icon={welcomeimage.icon} />))}
        </section>
     );
}
 
export default WelcomeContainer;
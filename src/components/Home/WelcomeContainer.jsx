import WelcomeCard from "./WelcomeCard";
import Images from "next/image";

const welcomeimages = ["/assets/content-img/reastarant_1.jpg", "/assets/content-img/thumb1.jpg", "/assets/conetent-img/thumb2.jpg"];
const WelcomeContainer = () => {
    return ( 
        <section>
            <h2>Welcome in nightclub</h2>
            <Images src="/assets/bottom_line.png" alt="line" width={1364} height={109} />
            {welcomeimages.map((welcomeimage) => (<WelcomeCard key={welcomeimage.id} img={welcomeimage.img} icon={welcomeimage.icon} />))}
        </section>
     );
}
 
export default WelcomeContainer;
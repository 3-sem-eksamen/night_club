import WelcomeCard from "./WelcomeCard";

const welcomeimages = ["/assets/content-img/reastarant_1.jpg", "/assets/content-img/thumb1.jpg", "/assets/conetent-img/thumb2.jpg"];
const WelcomeContainer = () => {
    return ( 
        <section>
            {welcomeimages.map((welcomeimage) => (<WelcomeCard key={welcomeimage.id} img={welcomeimage.img} icon={welcomeimage.icon} />))}
        </section>
     );
}
 
export default WelcomeContainer;
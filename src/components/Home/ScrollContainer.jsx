import ScrollCard from "./ScrollCard";

const trackThumbs = ["/assets/content-img/track_thumb.jpg", "/assets/content-img/track1.jpg", "/assets/content-img/track2.jpg", "/assets/content-img/track4.jpg", "/assets/content-img/track5.jpg"];


const ScrollContainer = () => {
    return ( 
        <section>
            {trackThumbs.map((thumb, id) => <ScrollCard img={thumb} key={id} />)}
        </section>
     );
}
 
export default ScrollContainer;
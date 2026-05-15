import ScrollCard from "./ScrollCard";

const comingSoonTracks = [{image: "/assets/content-img/track4.jpg"},{image:"/assets/content-img/track5.jpg"}];


const ScrollContainer = ({media, currentMedia, selectedMedia}) => {
    return ( 
        <section>
            {media.map((mediaImg, index) => <ScrollCard img={mediaImg} key={index} isActive={index===currentMedia} onClick={()=>selectedMedia(index)} />)}
            {comingSoonTracks.map((img)=> <ScrollCard img={img}/>)}
        </section>
     );
}
 
export default ScrollContainer;
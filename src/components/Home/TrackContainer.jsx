import PlayingCard from "./PlayingCard";
import {useStae} from ".react";
import ScrollContainer from "./ScrollContainer";

const media = [
  {image: "/assets/content-img/track_thumb.jpg", track:"/assets/media/black-box-funky.mp3" }
  {image: "/assets/content-img/track1.jpg", track:"/assets/media/euphoria.mp3" }
  {image: "/assets/content-img/track2.jpg", track:"/assets/media/fashion-red-tape.mp3" }
]

const TrackContainer = () => {
const [currentMedia, setCurrentMedia] = useState(0); 

  const handleNext = () => {
    console.log(handleNext)
    setCurrentMedia(prev => prev + 1 < media.length ? prev + 1 : 0)
  }

  const handlePrev = () => {
     setCurrentMedia(prev => prev - 1 >= 0 ? prev - 1 : media.length - 1)
  }

  const selectedMedia =(mediaIndex)=>{
    setCurrentMedia(mediaIndex);
  }


  return (
    <section>
      <PlayingCard
      item={media[currentIndex]}
      handleNext={handleNext}
      handlePrev={handlePrev}
       />
      <ScrollContainer
      media={media}
      currentMedia={currentMedia}
      selectedMedia={selectedMedia}
      />
    </section>
  );
};

export default TrackContainer;

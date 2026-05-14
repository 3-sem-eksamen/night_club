import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const PlayingCard = () => {
  return (
    <>
      <AudioPlayer autoPlay src="/assets/media/black-box-funky.mp3" onPlay={(e) => console.log("OnPlay")} />
    </>
  );
};

export default PlayingCard;

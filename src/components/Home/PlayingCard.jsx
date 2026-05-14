"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const PlayingCard = () => {
  return (
    <>
      <AudioPlayer className="bg-red-200" autoPlay src="/assets/media/black-box-funky.mp3" onPlay={(e) => console.log("OnPlay")} />
    </>
  );
};

export default PlayingCard;

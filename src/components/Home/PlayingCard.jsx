"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
import Image from "next/image";


const media = [
  {image: "/assets/content-img/track_thumb.jpg", track:"/assets/media/black-box-funky.mp3" }
  {image: "/assets/content-img/track1.jpg", track:"/assets/media/euphoria.mp3" }
  {image: "/assets/content-img/track2.jpg", track:"/assets/media/fashion-red-tape.mp3" }
]


const PlayingCard = () => {
const [currentTrack, setCurrentTrack] = useState(0); 

  const handleNext = () => {
    console.log(handleNext)
    setCurrentTrack(prev => prev + 1 < tracks.length ? prev + 1 : 0)
  }

  const handlePrev = () => {
     setCurrentTrack(prev => prev - 1 >= 0 ? prev - 1 : tracks.length - 1)
  }

  return (
    <>
<Image src=""></>
      <AudioPlayer className="bg-red-200" showJumpControls={false} onClickNext={handleNext} onClickPrevious={handlePrev} showSkipControls src={tracks [currentTrack]} onPlay={(e) => console.log("OnPlay")} />
    </>
  );
};

export default PlayingCard;

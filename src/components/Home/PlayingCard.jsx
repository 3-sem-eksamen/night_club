"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
import Image from "next/image";


const PlayingCard = ({item, handleNext, handlePrev}) => {

  return (
    <>
    <h2>{item.title}</h2>
    <Image 
      src={item.image}
      width={233}
      height={217}
      alt="track thumbnail"
    />

    <AudioPlayer 
      className="bg-red-200" 
      showJumpControls={false} 
      onClickNext={handleNext} 
      onClickPrevious={handlePrev} 
      showSkipControls 
      src={item.track}
    />
    </>
  );
};

export default PlayingCard;

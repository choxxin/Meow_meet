import React, { useRef, useState } from "react";
import YouTube from "react-youtube";
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IoCaretBackOutline } from "react-icons/io5";
import { IoCaretForwardOutline } from "react-icons/io5";
const VideoPlayer: React.FC = () => {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50); // Volume level from 0 to
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const onReady = (event: any) => {
    playerRef.current = event.target;
  };

  const videoIds = [
    "jfKfPfyJRdk",
    "0ba7dl40tSQ",
    "9ztEPDxZUN4",
    "4xDzrJKXOOY",
    "_gVrQa_bvm8",
    "rtTI1rh9U5M",
    "c69EpwmQUnw",
    "GYvfaMx3J7k",
  ];
  const title = [
    "1. Lofi girl Radio✨",
    "2. Tokyo rain🎇",
    "3. Shiloh dynasty🎊",
    "4. synthwave 🌌",
    "5. smoke and chill 🎵",
    "6. Hindi lofi 🎹",
    "7. Phonkers ※ Фонка",
    "8. You r hot 💣🔥",
  ];

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };
  const opts = {
    height: " 0 ", // Set height and width to 0 to hide the player
    width: "0 ",
    playerVars: {
      autoplay: 0,
    },
  };
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
    setIsPlaying(false);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videoIds.length) % videoIds.length
    );
    setIsPlaying(false);
  };
  //   <input
  //   type="range"
  //   min="0"
  //   max="100"
  //   value={volume}
  //   onChange={handleVolumeChange}
  // />
  const skipForward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + 10);
    }
  };

  const skipBackward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime - 10);
    }
  };

  return (
    <div className="flex flex-wrap gap-5  items-center glass sm:gap-12   ">
      <div className="flex flex-col  gap-2 ml-9 sm:ml-3  ">
        <YouTube
          videoId={videoIds[currentVideoIndex]} // Replace with your YouTube video ID
          opts={opts}
          onReady={onReady}
        />
        <div className="hover:text-gray-800 text-xl font-bold  text-gray-900 ml-16">
          {title[currentVideoIndex]}
        </div>
        <div className="flex gap-8">
          <button onClick={handlePreviousVideo}>
            <GrChapterPrevious className="w-8 h-8 hover:text-gray-700  text-gray-900" />
          </button>
          <button onClick={skipBackward}>
            <IoCaretBackOutline className="w-8 h-8   hover:text-gray-700 text-gray-900" />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? (
              <FaPause className="w-8 h-8  hover:text-gray-700  text-gray-900" />
            ) : (
              <FaPlay className="w-8 h-8  hover:text-gray-700  text-gray-900" />
            )}
          </button>
          <button onClick={skipForward}>
            <IoCaretForwardOutline className="w-8 h-8  hover:text-gray-700  text-gray-900" />
          </button>

          <button onClick={handleNextVideo}>
            <GrChapterNext className="w-8 h-8   hover:text-gray-700 text-gray-900" />
          </button>
        </div>
      </div>

      <div className="flex  justify-center gap-5 ml-14  sm:mr-5">
        <p className="text-gray-300 font-extrabold text-xl">Volume</p>

        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;

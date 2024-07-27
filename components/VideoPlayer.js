import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ src, className }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime > 10) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return <video ref={videoRef} controls src={src} className={className} />;
};

export default VideoPlayer;

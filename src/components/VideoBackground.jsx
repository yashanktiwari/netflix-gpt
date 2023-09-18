import React from "react";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  
  // fetch trailer video and updating the store with trailer video data
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video md:mt-0"
        src={`https://www.youtube.com/embed/`+trailerVideo?.key+"?autoplay=1&mute=1&controls=0&loop=1&playlist="+trailerVideo?.key}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

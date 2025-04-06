import React from "react";
import UseMovieTrailer from "../hooks/UseMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  UseMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  console.log(trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

import React from "react";
import UseMovieTrailer from "./hooks/UseMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  UseMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video md:-mt-10"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

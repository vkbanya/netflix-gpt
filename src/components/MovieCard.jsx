import React from "react";
import { movieImgUrl } from "./utils/Constant";

const MovieCard = ({ path }) => {
  if (!path) return null;
  return (
    <img tabIndex={1} className="w-20 md:w-40 mx-1" alt="Movie card" src={movieImgUrl + path} />
  );
};

export default MovieCard;

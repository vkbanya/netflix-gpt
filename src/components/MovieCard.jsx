import React from "react";
import { movieImgUrl } from "./utils/Constant";

const MovieCard = ({ path }) => {
  return (
      <img className="w-40 mx-1" alt="Movie card" src={movieImgUrl + path} />
  );
};

export default MovieCard;

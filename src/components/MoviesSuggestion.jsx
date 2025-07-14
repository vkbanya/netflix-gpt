import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const MoviesSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  return (
    <div className="bg-black opacity-85 md:-mt-[10%]">
      {movieNames?.map((movie, index) => (
        <MoviesList key={index} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default MoviesSuggestion;

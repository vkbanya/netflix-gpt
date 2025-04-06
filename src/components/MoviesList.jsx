import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="pl-12 relative z-1 -mt-24 mb-32">
      <h1 className="text-white font-bold text-2xl my-4">{title}</h1>
      <div className="flex overflow-x-scroll mb-12">
      {movies?.map((movie) => (
          <MovieCard title="Recent movies" path={movie.poster_path} />
        ))}
        </div>
    </div>
  );
};

export default MoviesList;

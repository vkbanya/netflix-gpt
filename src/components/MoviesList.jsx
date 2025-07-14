import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="pl-6 md:pl-12 relative z-1 -mt-20 md:-mt-8 lg:-mt-20 mb-24 md:mb-32">
      <h1 className="text-white font-bold text-2xl my-4 py-2">{title}</h1>
      <div className="flex overflow-x-scroll mb-12" tabIndex={-1}>
        {movies?.map((movie, index) => (
          <MovieCard
            key={index}
            title="Recent movies"
            path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;

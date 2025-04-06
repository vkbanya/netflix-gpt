import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div>
        <MoviesList title="Recent movies" movies={movies.recentMovies} />
        <MoviesList title="Popular movies" movies={movies.popularMovies} />
        <MoviesList title="Top rated movies" movies={movies.topRatedMovies} />
        <MoviesList title="Upcoming movies" movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;

import React, { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const UsePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_options
    );
    const movies = await data.json();
    dispatch(addPopularMovies(movies.results));
  };
};

export default UsePopularMovies;

import React, { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const UseTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_options
    );
    const movies = await data.json();
    dispatch(addTopRatedMovies(movies.results));
  };
};

export default UseTopRatedMovies;

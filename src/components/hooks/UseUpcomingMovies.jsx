import React, { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const UseUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  const fetchUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_options
    );
    const movies = await data.json();
    dispatch(addUpcomingMovies(movies.results));
  };
};

export default UseUpcomingMovies;

import React, { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addRecentMovies } from "../utils/moviesSlice";

const UseRecentMovies = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchRecentMovies();
  }, []);

  const fetchRecentMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const movies = await data.json();
    dispatch(addRecentMovies(movies.results));
  }
};

export default UseRecentMovies;

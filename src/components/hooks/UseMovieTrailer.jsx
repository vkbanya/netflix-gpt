import React, { useEffect } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const UseMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieTrailer(movieId);
  }, []);

  const fetchMovieTrailer = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_options
    );
    const json = await data.json();
    const filteredData = json?.results?.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = filteredData.length
      ? filteredData?.at(0)
      : filteredData?.at(0);
    dispatch(addTrailerVideo(trailer));
  };
};

export default UseMovieTrailer;

import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";
import { API_options } from "../utils/Constant";

const useGPTMovies = (searchText) => {
  const dispatch = useDispatch();

  const fetchGPTMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const movieDetail = await data.json();
    return movieDetail.results;
  };

  const handleGPTSearchClick = async () => {
    const _gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText +
      " Only gives me name of five movies, comma saperated like results given in example. Example : hera pheri, welcome, golmaal, bahubali";
    //  const completion = await client.chat.completions.create({
    //    model: "gpt-4o",
    //    messages: [{ role: "user", content: gptQuery }],
    //  });
    let movies = "hera pheri, welcome, golmaal, de dana dan, bahubali";
    const gptMovies = movies.split(",");
    const promiseArray = gptMovies?.map((movie) => fetchGPTMovies(movie));
    const tmdbMovies = await Promise.all(promiseArray);
    dispatch(addGPTMovies({ movieNames: gptMovies, movieResults: tmdbMovies }));
  };

  return {handleGPTSearchClick};
};

export default useGPTMovies;

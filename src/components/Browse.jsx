import React from "react";
import Header from "./Header";
import UseRecentMovies from "./hooks/UseRecentMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";
import UsePopularMovies from "./hooks/UsePopularMovies";
import UseTopRatedMovies from "./hooks/UseTopRatedMovies";
import UseUpcomingMovies from "./hooks/UseUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  UseRecentMovies();
  UsePopularMovies();
  UseTopRatedMovies();
  UseUpcomingMovies();

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <>
      <div className="w-screen z-10">
        <Header />
      </div>
      
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <Footer />
    </>
  );
};

export default Browse;

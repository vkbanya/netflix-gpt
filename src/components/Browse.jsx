import React from "react";
import Header from "./Header";
import UseRecentMovies from "./hooks/UseRecentMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";
import UsePopularMovies from "./hooks/UsePopularMovies";
import UseTopRatedMovies from "./hooks/UseTopRatedMovies";
import UseUpcomingMovies from "./hooks/UseUpcomingMovies";

const Browse = () => {
  UseRecentMovies();
  UsePopularMovies();
  UseTopRatedMovies();
  UseUpcomingMovies();

  return (
    <>
    <div className="absolute w-screen z-10">
      <Header />
    </div>
      <MainContainer />
      <SecondaryContainer />
      <Footer/>
    </>
  );
};

export default Browse;

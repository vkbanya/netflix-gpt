import React from "react";
import Header from "./Header";
import UseRecentMovies from "./hooks/UseRecentMovies";
import MainContainer from "./utils/MainContainer";
import SecondaryContainer from "./utils/SecondaryContainer";

const Browse = () => {
  UseRecentMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;

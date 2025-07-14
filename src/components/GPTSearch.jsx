import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { LangConstants } from "./LangConstants";
import useGPTMovies from "./hooks/useGPTMovies";
import MoviesSuggestion from "./MoviesSuggestion";

const GPTSearch = () => {
  const lang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { handleGPTSearchClick } = useGPTMovies(searchText?.current?.value);

  return (
    <div className='bg-[url("assets/BgImage.jpg")]'>
      <div className="pt-[10%] pb-[18%]">
        <form
          className="text-white mx-auto w-[90%] text-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="p-3 m-2 border-2 w-[100%] md:w-[50%]"
            type="text"
            placeholder={LangConstants[lang].gptSearchPlaceholderTxt}
            ref={searchText}
          />
          <button
            className="p-3.5 m-2 rounded-sm w-28 bg-red-700 cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            {LangConstants[lang].search}
          </button>
        </form>
      </div>

      <MoviesSuggestion />
    </div>
  );
};

export default GPTSearch;

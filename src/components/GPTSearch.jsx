import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LangConstants } from "./LangConstants";

const GPTSearch = () => {
  const [searchText, setSearchText] = useState("");
  const lang = useSelector((store) => store.config.lang);

  return (
    <div className='bg-[url("./Bg_image.jpg")]'>
      <div className="pt-[8%] pb-[40%]">
        <form className="text-white mx-auto w-[90%] text-center">
          <input
            className="p-3 m-2 border-2 w-[50%]"
            type="text"
            placeholder={LangConstants[lang].gptSearchPlaceholderTxt}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="p-3.5 m-2 rounded-sm w-28 bg-red-700">
            {LangConstants[lang].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearch;

import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="text-white pl-6 md:pl-12 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <div className="mt-[30%] md:mt-[16%] lg:mt-[24%]">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="hidden md:w-1/2 md:block">{description}</p>
        <div className="text-black md:mt-6">
          <button className="h-8 md:h-11 w-28 font-bold bg-white rounded-sm mr-4 hover:opacity-80">
            ▶ Play
          </button>
          <button className="h-8 md:h-11 w-32 font-bold bg-[#585a5e] rounded-sm text-white hover:opacity-80">
            &#9432; More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

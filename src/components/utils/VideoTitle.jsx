import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="text-white pl-12 absolute w-screen aspect-video bg-gradient-to-r from-black">
        <div className="mt-[15%]">

      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="w-1/4">{description}</p>
      <div className="text-black mt-6">
        <button className="h-11 w-28 font-bold bg-white rounded-sm mr-4 hover:opacity-80">
          ▶ Play
        </button>
        <button className="h-11 w-32 font-bold bg-[#585a5e] rounded-sm text-white hover:opacity-80">
          &#9432; More info
        </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

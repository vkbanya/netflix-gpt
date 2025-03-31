import React from "react";
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";
import Faqs from "./Faqs";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#b55068]">
      <Header css="w-full flex justify-between items-center px-12"/>
      <div className="bg-[url('./Bg_image.jpg')] h-150 m-auto rounded-2xl mx-12">
        <TopElement />
      </div>
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;

const TopElement = () => {
  return (
    <div className="w-1/2 m-auto text-center text-white bg-transparent">
      <div className=" my-auto ">
        <p className="font-bold text-4xl my-4">
          Unlimited movies, TV shows and more
        </p>
        <p className="text-2xl my-4">Starts at ₹149. Cancel at any time.</p>
        <p className="my-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input
          className="p-4 rounded-4xl w-6/12 mr-2 bg-[rgba(255,255,255,0.2)]"
          type="input"
          placeholder="Email address"
        />
        <button className="bg-red-600 rounded-4xl py-4 w-4/12  text-white">
          Get started &#62;
        </button>
      </div>
    </div>
  );
};

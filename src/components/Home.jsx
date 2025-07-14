import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Faqs from "./Faqs";

const Home = () => {
  return (
    <div className="bg-[#321c23]">
      <Header />
      <div className="bg-[url('assets/BgImage.jpg')] h-150 rounded-3xl mx-12 content-center">
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
    <div className="w-full bg-black opacity-70 h-full rounded-3xl">
      <div className="w-3/4 m-auto text-center text-white pt-[10%]">
        <p className="font-bold text-3xl mt-16 md:text-6xl my-4">
          Unlimited movies, TV shows and more
        </p>
        <p className="md:text-2xl my-4">Starts at ₹149. Cancel at any time.</p>
        <p className="my-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {/* <input
          className="p-4 rounded-4xl w-6/12 mr-2 bg-[rgba(255,255,255,0.2)]"
          type="input"
          placeholder="Email address"
          />
        <button className="bg-red-600 rounded-4xl py-4 w-4/12  text-white">
          Get started &#62;
        </button> */}
      </div>
    </div>
  );
};

import React from "react";
import Header from "./Header";
import Login from "./Login";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black to-white">
      <div className="bg-[url('./Bg_image.jpg')] h-200">
          <Header />

          <div className="w-6/12 m-auto text-center text-white py-8 opacity-90 shadow-4xl">
            <p className="font-bold text-4xl my-4">Unlimited movies, TV shows and more</p>
            <p className="text-2xl my-4">Starts at ₹149. Cancel at any time.</p>
            <p className="my-4">Ready to watch? Enter your email to create or restart your membership.</p>
            <input className='border-1 p-4 rounded-4xl w-6/12  border-y-stone-600 mr-2 bg-gray-800' type="input" placeholder="Email address"/>
            <button className="bg-red-600 rounded-4xl py-4 w-4/12  text-white">Get started &#62;</button>
          </div>
      </div>
          {/* <button className="bg-white rounded-2xl px-3 py-1">Sign In</button> */}
          {/* <img className="rounded-3xl relative" alt="bg-image" src={"./Bg_image.jpg"} /> */}

      {/* <Login/> */}
    </div>
  );
};

export default Home;

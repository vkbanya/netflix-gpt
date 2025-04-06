import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "./utils/Firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-black">
      <div className="mx-12 my-2 flex justify-between items-center ">
        <img className="w-44" alt="logo" src={"./Netflix_Logo.png"} />

        <div>
          {user ? (
            <button
              className=" bg-white h-8 w-20 rounded-4xl cursor-pointer"
              onClick={() => handleSignOut()}
            >
              Sign out
            </button>
          ) : (
            <button
              className=" bg-white h-8 w-20 rounded-4xl cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

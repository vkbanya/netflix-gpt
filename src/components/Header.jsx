import React from "react";
import { useNavigate } from "react-router";

const Header = ({ hideLoginbtn = false, css }) => {
  const navigate = useNavigate();
  return (
    <div className={css}>
      <img className="w-44 py-1" alt="logo" src={"./Netflix_Logo.png"} />
      {!hideLoginbtn && (
        <button
          className=" bg-white h-8 w-20 rounded-4xl cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default Header;

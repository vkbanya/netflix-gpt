import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="absolute align-middle w-4/12 bg-black opacity-80">
      <form className="w-10/12 my-6 text-white text-center">
        <p className="text-2xl my-4 font-bold my-">
          {isLogin ? "Sign up" : "Sign In"}
        </p>
        <input
          className="border-1 border-gray m-2 p-3 w-full rounded-sm"
          type="text"
          placeholder="Email or mobile number"
        />
        <input
          className="border-1 border-gray m-2 p-3 w-full rounded-sm"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 m-2 bg-red-600 rounded-sm w-full cursor-pointer">
          {isLogin ? "Sign up" : "Sign In"}
        </button>
        <p>OR</p>
        <button
          w-full
          className="p-2 m-2 bg-gray-600 rounded-sm w-full cursor-pointer"
        >
          Use a sign-in code
        </button>
        <p className="my-2">Forgot password?</p>

        <span className="my-2">
          <input className="mr-2" type="checkbox" />
          <span>Remember me</span>
        </span>
        <p className="my-2">
          {isLogin ? "Already registered? " : "New to Netflix? "}
          <Link onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign In" : "Sign up now."}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

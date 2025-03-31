import React, { useState } from "react";
import { Link } from "react-router";
import Header from "./Header";
import {
  validateEmailOrNumber,
  validatePassword,
} from "./utils/ValidateFields";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const checkEmail = validateEmailOrNumber(emailOrNumber);
    const checkPassword = validatePassword(password);
    if (!(checkEmail && checkPassword)) return;
    console.log(emailOrNumber, password);
  };

  return (
    <div className="bg-[url('./Bg_image.jpg')] h-210 shadow-black justify-items-center content-center">
      <Header hideLoginbtn css="w-full flex justify-between items-top px-20 " />
      <div className="w-4/12 bg-black opacity-75 py-8 shadow-4xl">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-10/12 my-6 m-auto text-white text-center"
        >
          <p className="text-2xl my-4 font-bold my-">
            {isLogin ? "Sign up" : "Sign In"}
          </p>
          <input
            className="border-1 border-gray m-2 p-3 w-full rounded-sm"
            type="text"
            placeholder="Email or mobile number"
            value={emailOrNumber}
            onChange={(e) => setEmailOrNumber(e.target.value)}
            onBlur={(e) =>
              !validateEmailOrNumber(e.target.value)
                ? setErrors({
                    ...errors,
                    emailOrNumber: "Invalid email address or mobile number",
                  })
                : setErrors({ ...errors, emailOrNumber: false })
            }
          />
          {errors.emailOrNumber && (
            <p className="text-red-600 mb-1">{errors.emailOrNumber}</p>
          )}
          <input
            className="border-1 border-gray m-2 p-3 w-full rounded-sm"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) =>
              !validatePassword(e.target.value)
                ? setErrors({ ...errors, password: "Invalid password" })
                : setErrors({ ...errors, password: false })
            }
          />
          {errors.password && (
            <p color="red" className="text-red-600 mb-1">
              {errors.password}
            </p>
          )}
          <button
            type="submit"
            className="p-2 m-2 bg-red-600 rounded-sm w-full cursor-pointer"
            onClick={() => handleSubmit()}
          >
            {isLogin ? "Sign up" : "Sign In"}
          </button>
          <p>OR</p>
          <button className="p-2 m-2 bg-gray-600 rounded-sm w-full cursor-pointer">
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
    </div>
  );
};

export default Login;

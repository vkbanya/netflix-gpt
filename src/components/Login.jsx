import React, { useState } from "react";
import { Link } from "react-router";
import Header from "./Header";
import {
  validationName,
  validateEmailOrNumber,
  validatePassword,
} from "./utils/ValidateFields";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/Firebase";
import { addUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [fullName, setFullName] = useState("");
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const name = validationName(fullName);
    const checkEmail = validateEmailOrNumber(emailOrNumber);
    const checkPassword = validatePassword(password);
    
    setLoading(true);
    if (!loginForm) {
      if (!(name && checkEmail && checkPassword)) return;
      createUserWithEmailAndPassword(auth, emailOrNumber, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName,
            photoURL: "",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrors({
                ...errors,
                apiErr: error,
              });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors({
            ...errors,
            apiErr: errorCode + " - " + errorMessage,
          });
        });
      setLoading(false);
    } else {
      if (!(checkEmail && checkPassword)) return;
      signInWithEmailAndPassword(auth, emailOrNumber, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors({
            ...errors,
            apiErr: errorCode + " - " + errorMessage,
          });
        });
      setLoading(false);
    }
  };
  return (
    <div className="bg-[url('assets/BgImage.jpg')] h-210 shadow-black">
      <Header hideBtn />
      <div className="justify-items-center content-center">
        <div className="w-[90%] md:w-1/3 m-auto h-[30em] bg-black opacity-85 py-8 shadow-4xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-10/12 my-6 m-auto text-white text-center"
          >
            <p className="text-2xl my-4 font-bold my-">
              {loginForm ? "Sign In" : "Sign up"}
            </p>
            {!loginForm && (
              <input
                className="border-1 border-gray m-2 p-3 w-full rounded-sm mb-2"
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={(e) =>
                  !validationName(e.target.value)
                    ? setErrors({
                        ...errors,
                        fullName: "Invalid name",
                      })
                    : setErrors({ ...errors, fullName: false })
                }
              />
            )}
            {errors.fullName && (
              <p className="text-red-600 mb-1">{errors.fullName}</p>
            )}
            <input
              className="border-1 border-gray m-2 p-3 w-full rounded-sm mb-2"
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
              className="border-1 border-gray m-2 p-3 w-full rounded-sm mb-2"
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

            {errors.apiErr && (
              <p color="red" className="text-red-600 mb-1">
                {errors.apiErr}
              </p>
            )}
            <button
              type="submit"
              className="p-2 mt-8 m-2 bg-red-600 rounded-sm w-full cursor-pointer"
              onClick={() => handleSubmit()}
            >
              {loginForm ? "Sign In" : "Sign up"}
            </button>
            <p className="my-2">
              {loginForm ? "New to Netflix? " : "Already registered? "}
              <Link onClick={() => setLoginForm(!loginForm)}>
                {loginForm ? (
                  <span className="font-bold">Sign up now.</span>
                ) : (
                  <span className="font-bold">Sign In</span>
                )}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

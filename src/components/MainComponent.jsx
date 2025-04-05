import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Route, Routes } from "react-router";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/Firebase";
import { addUser, removeUser } from "./utils/userSlice";

const MainComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid: uid,email: email,displayName: displayName}))
      } else {
        dispatch(removeUser())
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default MainComponent;

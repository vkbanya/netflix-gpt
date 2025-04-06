import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Route, Routes } from "react-router";
import Home from "./Home";

const MainComponent = () => {
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

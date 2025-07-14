import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Route, Routes } from "react-router";
import Home from "./Home";
import NotFound from "./NotFound";

const MainComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainComponent;
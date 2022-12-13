import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./assets/pages/error-page";
import Heading from "./assets/pages/Heading";
import FetchMovies from "./assets/components/FetchMovies";
import About from "./assets/pages/About";
import SingleMovie from "./assets/components/SingleMovie";

function App() {
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<FetchMovies />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </Router>
    //Renderar ut alla filmerna var för sig
  );
}

export default App;

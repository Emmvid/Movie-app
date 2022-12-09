import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/error-page";
import Heading from "./components/Heading";
import FetchMovies from "./components/FetchMovies";
import About from "./components/About";
import SingleMovie from "./components/SingleMovie";



function App() {
 
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<FetchMovies/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/:id" element={<SingleMovie />}  />
      </Routes>
    </Router>
    //Renderar ut alla filmerna var för sig
  );
}

export default App;

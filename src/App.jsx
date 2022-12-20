import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./assets/pages/error-page";
import Heading from "./assets/pages/Heading";
import FetchMovies from "./assets/components/FetchMovies";
import About from "./assets/pages/About";
import SingleMovie from "./assets/components/SingleMovie";
import "./App.css";


function App() {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  function addRecentlyViewed({ movie }) {
    let addMovie = recentlyViewed.find((addMovie) => movie.id === addMovie.id)
    if(!addMovie){
    let newMovieList = [...recentlyViewed, movie];
    setRecentlyViewed(newMovieList);
  }
  }
  return (
    <Router>
      <Heading name="the Movie page" home="home" about="about"/>
      <Routes>
        <Route path="/" element={<FetchMovies addRecentlyViewed={addRecentlyViewed}
                recentlyViewed={recentlyViewed} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </Router>
    
  );
}

export default App;


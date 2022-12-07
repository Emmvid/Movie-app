import React, { useState, useEffect } from "react";
import "./App.css";

import Heading from "./components/Heading";
import FetchMovies from "./components/FetchMovies";

function App() {
  return (
    //Renderar ut alla filmerna var för sig
    <div className="app">
      <h1>Movies</h1>

      <Heading heading="Movies" />
      <FetchMovies />
    </div>
  );
}

export default App;

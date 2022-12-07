import React, { useState, useEffect } from "react";
import "./App.css";
import Searchbox from "./components/SearchBox";
import Heading from "./components/Heading";
import FetchMovies from "./components/FetchMovies";

function App() {
  const [searchValue, setSearchValue] = useState("christmas");

  return (
    //Renderar ut alla filmerna var för sig
    <div className="app">
      <h1>Movies</h1>

      <Heading heading="Movies" />
      <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
      <FetchMovies />
    </div>
  );
}

export default App;

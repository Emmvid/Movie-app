import Movies from "../pages/Movies";
import React, { useState, useEffect, useRef } from "react";
import Searchbox from "./SearchBox";
import RecentlyViewed from "./RecentlyViewed";
import "../pages/movies.css";


function FetchMovies({ addRecentlyViewed, recentlyViewed, setRecentlyViewed }) {
  const [popular, setPopular] = useState([]);
  const [searchValue, setSearchValue] = useState("christmas");

  const fetchMovies = async (searchValue) => {
    // Hämtar filmerna
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${searchValue}&language=en-US&page=1&include_adult=false`;
    const data = await fetch(url);
    const movies = await data.json();
    setPopular(movies.results);

    if (movies.Search) {
      setPopular(movies.Search);
    }
   
  };

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);

  return (
    <>
    <main>
      <Searchbox setSearchValue={setSearchValue} />
      <div className="row">
        {popular &&
          popular.map((movie) => {
            return (
              <Movies
                key={movie.id}
                movie={movie}
                addRecentlyViewed={addRecentlyViewed}
              />
            );
          })}
      </div>
      <RecentlyViewed recentlyViewed={recentlyViewed} />
    </main>
    </>
  );
}

export default FetchMovies;

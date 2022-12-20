import Movies from "../pages/Movies";
import React, { useState, useEffect } from "react";
import Searchbox from "./SearchBox";
import RecentlyViewed from "./RecentlyViewed";
import "../pages/movies.css";
import PopularMovies from "./PopularMovies";


function FetchMovies({ addRecentlyViewed, recentlyViewed, setRecentlyViewed }) {
  const [fetched, setFetched] = useState([]);
  const [searchValue, setSearchValue] = useState("christmas");

  const fetchMovies = async (searchValue) => {
    // Hämtar filmerna
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${searchValue}&language=en-US&page=1&include_adult=false`;
    const data = await fetch(url);
    const movies = await data.json();
    setFetched(movies.results);

    if (movies.Search) {
      setFetched(movies.Search);
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
        {fetched &&
          fetched.map((movie) => {
            return (
              <Movies
                key={movie.id}
                movie={movie}
                addRecentlyViewed={addRecentlyViewed}
              />
            );
          })}
      </div>
      <PopularMovies addRecentlyViewed={addRecentlyViewed}/>
      <RecentlyViewed recentlyViewed={recentlyViewed} />
    </main>
    </>
  );
}

export default FetchMovies;

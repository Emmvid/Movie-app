import Movies from "../pages/Movies";
import React, { useState, useEffect } from "react";
import Searchbox from "./SearchBox";
import RecentlyViewed from "./RecentlyViewed";

function FetchMovies() {
  const [popular, setPopular] = useState([]);
  const [searchValue, setSearchValue] = useState("christmas");

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);

  const fetchMovies = async (searchValue) => {
    // Hämtar filmerna
    const apiKey = "cea77006d0fb470be9cf5312be7293d5";
    const url = `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${searchValue}&language=en-US&page=1&include_adult=false`;
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);

    if (movies.Search) {
      setPopular(movies.Search);
    }
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  return (
    <main>
      <Searchbox setSearchValue={setSearchValue} />
      <div className="row">
        {popular &&
          popular.map((movie) => {
            return (
              <Movies
                key={movie.id}
                movie={movie}
                favouriteComponent={RecentlyViewed}
                handleFavouritesClick={addFavouriteMovie}
              />
            );
          })}
      </div>
      <RecentlyViewed />
    </main>
  );
}

export default FetchMovies;

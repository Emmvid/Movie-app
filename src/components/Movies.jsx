import React from "react";
import { useState } from "react";
import "./movies.css";
import SingleMovie from "./SingleMovie";


const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.pexels.com/sv-se/foto/kurva-fotografi-vintage-bild-65128/";
const Movies = ({ movie }) => {
  //Skapar en grej för varje film
  const [isShown, setIsShown] = useState(false)

  const handleClick = event => {
    setIsShown( current => !current)
  }
  const poster = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

  return (
    <>
    <div className="movies">
      <img
        src={poster}
        alt={movie.path}
      /> 
      <h5 onClick={handleClick}>{movie.title}</h5>
      <p> {movie.vote_average} imdb-rating</p>
    
    {isShown && 
    <> <p>Title:{movie.title} Original language: {movie.original_language}  Description: {movie.overview}</p> </>}
    </div>
    </>
  );
};

export default Movies;

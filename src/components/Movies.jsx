import React from "react";
import "./movies.css";

const Movies = ({ movie }) => {
  //Skapar en grej för varje film
  return (
    <div className="movies">
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.path}
      />
      <p> {movie.vote_average} imdb-rating</p>
    </div>
  );
};

export default Movies;

import React from "react";
import { Link } from "react-router-dom";
import "../pages/movies.css"


const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.pexels.com/sv-se/foto/kurva-fotografi-vintage-bild-65128/";
const Movies = ({ movie }) => {
  const FavouriteComponent = movie.favouriteComponent;

  const poster =
    "https://image.tmdb.org/t/p/w500" + movie.backdrop_path === "N/A"
      ? DEFAULT_PLACEHOLDER_IMAGE
      : "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

  return (
    <div className="movies" onClick={() => movie.handleFavouritesClick(movie)}>
      <img src={poster} alt={movie.path} />
      <h5>{movie.title}</h5>
      <p> {movie.vote_average} imdb-rating</p>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </div>
  );
};

export default Movies;

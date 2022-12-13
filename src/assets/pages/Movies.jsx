import React from "react";
import { Link } from "react-router-dom";
import "../pages/movies.css"
import { AiTwotoneStar} from "react-icons/ai"

const Movies = ({ movie }) => {
  const FavouriteComponent = movie.favouriteComponent;

  const poster =
    "https://image.tmdb.org/t/p/w500" + movie.poster_path 
  return (
    <div className="movies" onClick={() => movie.handleFavouritesClick(movie)}>
      <img src={poster} alt={movie.path} />
      <h5>{movie.title}</h5>
      <p> {movie.vote_average} <AiTwotoneStar/> imdb-rating</p>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </div>
  );
};

export default Movies;

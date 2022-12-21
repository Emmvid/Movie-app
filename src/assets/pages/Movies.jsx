import React from "react";
import { Link } from "react-router-dom";
import "../pages/movies.css"
import { AiTwotoneStar} from "react-icons/ai"

const Movies = ({ movie, addRecentlyViewed}) => {
  const poster =
    "https://image.tmdb.org/t/p/w500" + movie.poster_path 
  return (
    <> 
    <div className="movies" >
   <img src={poster} alt={movie.title} /> 
      <h5>{ movie.name || movie.title}</h5>
      <p> {movie.vote_average} <AiTwotoneStar/> imdb-rating</p>
      <h3><Link to={`/movie/${movie.id}`} onClick={() => addRecentlyViewed({movie})} >{movie.title || movie.name}</Link> </h3>
    </div>
    </>
  );
};

export default Movies;

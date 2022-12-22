import React from "react";
import { Link } from "react-router-dom";
import "../pages/movies.css";
import { AiTwotoneStar } from "react-icons/ai";
import noimage from "../images/noimage.jpg";

const Movies = ({ movie, addRecentlyViewed }) => {
  const poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <>
      <div className="movies">
        <img className="image" src={poster} alt={movie.title} />
        {!movie.poster_path && (
          <img
            className="noImage"
            src={noimage}
            alt={"image for" + movie.name + "is not available"}
          />
        )}
        <p>
          {movie.vote_average} <AiTwotoneStar /> imdb-rating
        </p>
        <h3>
          <Link
            to={`/movie/${movie.id}`}
            onClick={() => addRecentlyViewed({ movie })}
          >
            {movie.title || movie.name}
          </Link>
        </h3>
      </div>
    </>
  );
};

export default Movies;

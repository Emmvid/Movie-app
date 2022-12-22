import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/movies.css";

const SingleMovie = () => {
  let { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movie, setMovie] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setMovie(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Sorry, there has been an error!</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (movie) {
    const noMovie = "Sorry, no details were provided for this film";
    return (
      <div className="SingleMoviecontainer">
        <div className="singleMovie">
          <img
            src={
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path ||
              movie.poster_path
            }
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <p> release date: {movie.release_date || noMovie}</p>
          <p>Storyline: {movie.overview || noMovie}</p>
          <Link to={"/"}>
            <button className="btn">Back to home</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default SingleMovie;

import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import "../pages/movies.css"


const SingleMovie = () => {
   let {id} = useParams()

   console.log(id)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cea77006d0fb470be9cf5312be7293d5&language=en-US`)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setMovie(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
     if (error) {
         return <div>Sorry, there has been an error!</div>;
     }
    if (!isLoaded) {
         return <div>Loading...</div>;
    }  
    
    if (movie) {
        return (
            <div className='SingleMoviecontainer'>
                <div className='singleMovie'>
                    <img src={"https://image.tmdb.org/t/p/w500"+ movie.backdrop_path} alt={movie.title} />
                <h1>{movie.title}</h1>
                <p> release date: {movie.release_date}</p>
                <p>Storyline: {movie.overview}</p>
                <Link to={'/'}>
                <button className='btn'>Back to home</button> 
                </Link>
                </div>
            </div>
        );
    }
}
  

export default SingleMovie


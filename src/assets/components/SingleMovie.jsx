import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import "../pages/movies.css"


const SingleMovie = () => {
   let {id} = useParams()
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cea77006d0fb470be9cf5312be7293d5&language=en-US`)
            .then(res => res.json())
            .then(
                (data) => {
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
        const noMovie ="Sorry, no details were provided for this film"
        const noPicture = "https://images.pexels.com/photos/1040159/pexels-photo-1040159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        return (
            <div className='SingleMoviecontainer'>
                <div className='singleMovie'>
                    <img src={`https://image.tmdb.org/t/p/w500"+ ${movie.backdrop_path}` || noPicture} alt={movie.title} />
                <h1>{movie.title}</h1>
                <p> release date: {movie.release_date || noMovie }</p>
                <p>Storyline: {movie.overview || noMovie }</p>
                <Link to={'/'}>
                <button className='btn'>Back to home</button> 
                </Link>
                </div>
            </div>
        );
    }
}
  

export default SingleMovie


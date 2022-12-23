import { useEffect, useState } from "react";
import Movies from "../pages/Movies";
import "../pages/movies.css";

function PopularMovies({ addRecentlyViewed }) {
  const [popular, setPopular] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const popularUrl = `
        https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

  const fetchPopular = async () => {
    const popularData = await fetch(popularUrl);
    const popularMovies = await popularData.json();
    setPopular(popularMovies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="row">
      {popular &&
        popular.map((movie) => {
          return (
            <Movies
              key={movie.id}
              movie={movie}
              addRecentlyViewed={addRecentlyViewed}
            />
          );
        })}
    </div>
  );
}

export default PopularMovies;

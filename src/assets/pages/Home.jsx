import React from 'react'
import FetchMovies from '../components/FetchMovies';
import Searchbox from '../components/SearchBox';
import RecentlyViewed from "../components/RecentlyViewed";

function Home() {
  return (
    <div>
    <Searchbox setSearchValue={setSearchValue} /> 
    <FetchMovies />
    <RecentlyViewed recentlyViewed={recentlyViewed} />
    </div>
  )
}

export default Home
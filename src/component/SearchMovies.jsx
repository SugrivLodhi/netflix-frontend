import React, { useState } from 'react'
import { API_URL5, options } from "../constant";
import MoviesList from "./common/MoviesList";
import Search from "./common/Search";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMoviesDetails } from '../redux/searchSlice';
const SearchMovies = () => {
    const [searchMovies, setSearchMovies] = useState("");
    const {moviesName,movies} = useSelector((state=> state.searchMoviesData))
    const dispatch = useDispatch()
    const handleSearch = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.get(`${API_URL5}${searchMovies}`, options);
          const movies =response.data.results
          dispatch(setSearchMoviesDetails({movies,searchMovies}))
        } catch (error) {
          console.error("Error searching:", error);
        }
        setSearchMovies('')
      };
  return (
    <>
    <form onSubmit={handleSearch}>
    <div className="absolute top-[20%] left-1/3 z-10 ">
      <Search setSearch={setSearchMovies} />
    </div>
    </form>
    <div className='flex items-center mx-5 pt-[10%]'>
        {movies?.length ? (
        <MoviesList title={moviesName} movies={movies} isSearch />
      ): (<p className="text-black">No Movies Found</p>)}
      </div>
      
      </>
  )
}

export default SearchMovies
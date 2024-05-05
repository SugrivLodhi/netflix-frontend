import axios from "axios";
import {API_URL2, options } from "../constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopularMovies } from "../redux/moviesSlice";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  const {popularMovies } = useSelector((data) => data.moviesData);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL2, options);
      dispatch(setPopularMovies(response.data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { popularMovies };
};

export default useFetchPopularMovies;

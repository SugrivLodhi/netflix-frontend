import axios from "axios";
import { API_URL3, options } from "../constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setTopRatedMovies } from "../redux/moviesSlice";

const useFetchTopRatedMovies = () => {
  const dispatch = useDispatch();
  const {topRatedMovies } = useSelector((data) => data.moviesData);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL3, options);
      dispatch(setTopRatedMovies(response.data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { topRatedMovies };
};

export default useFetchTopRatedMovies;

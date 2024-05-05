import axios from "axios";
import { API_URL1, options } from "../constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setRecentMoving } from "../redux/moviesSlice";

const useFetchMovies = () => {
  const dispatch = useDispatch();
  const {recentMovies  } = useSelector((data) => data.moviesData);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL1, options);
      dispatch(setRecentMoving(response.data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { recentMovies };
};

export default useFetchMovies;

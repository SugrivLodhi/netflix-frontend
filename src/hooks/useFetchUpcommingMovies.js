import axios from "axios";
import { API_URL4, options } from "../constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpcommingMovies } from "../redux/moviesSlice";

const useFetchUpcommingMovies = () => {
  const dispatch = useDispatch();
  const {upcommingMovies } = useSelector((data) => data.moviesData);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(API_URL4, options);
      dispatch(setUpcommingMovies(response.data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { upcommingMovies };
};

export default useFetchUpcommingMovies;

import { configureStore } from "@reduxjs/toolkit";
import userData from "./userslice";
import moviesData from "./moviesSlice";
import searchMoviesData from "./searchSlice";
export const store = configureStore({
  reducer: {
    userData,
    moviesData,
    searchMoviesData,
  },
});

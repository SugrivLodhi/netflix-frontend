import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "recentMovies",
  initialState: {
    recentMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcommingMovies: [],
  },
  reducers: {
    setRecentMoving: (state, action) => {
      state.recentMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
  },
});

export const { setRecentMoving,setPopularMovies,setTopRatedMovies,setUpcommingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

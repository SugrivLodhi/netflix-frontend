import { createSlice } from "@reduxjs/toolkit";

const searchMoviesSlice = createSlice({
  name: "searchmovie",
  initialState: {
    moviesName: "",
    movies: [],
  },
  reducers: {
    setSearchMoviesDetails: (state, action) => {
      const { searchMovies, movies } = action.payload;
      state.moviesName = searchMovies;
      state.movies = movies;
    },
  },
});

export const { setSearchMoviesDetails } = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;

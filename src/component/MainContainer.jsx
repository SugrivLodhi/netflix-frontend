import React from "react";
import BackGroundVideo from "./BackGroundVideo";
import VideoTitle from "./VideoTitle";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";
import MoviesList from "./common/MoviesList";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchUpcommingMovies from "../hooks/useFetchUpcommingMovies";

const MainContainer = () => {
  const { recentMovies } = useFetchNowPlayingMovies();
  const { popularMovies } = useFetchPopularMovies();
  const { topRatedMovies } = useFetchTopRatedMovies();
  const { upcommingMovies } = useFetchUpcommingMovies();

  return (
    <div>
      <BackGroundVideo />
      <VideoTitle />
      <div className="text-white absolute top-2/3 left-8 ">
        <MoviesList title="Popular Movies" movies={recentMovies} />
        <MoviesList title="Now Playing Movies" movies={popularMovies} />
        <MoviesList title="Top Rated " movies={topRatedMovies} />
        <MoviesList title="Upcomming" movies={upcommingMovies} />
      </div>
    </div>
  );
};

export default MainContainer;

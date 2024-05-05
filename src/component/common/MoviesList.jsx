import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesList = ({ title, movies }) => {
  return (
    <div >
      <h2 className='mb-4 text-2xl'>{title}</h2>
      <div className='flex '  style={{ overflowX: 'scroll' }}>
        <div className="flex items-center">
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} path={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;

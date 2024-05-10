import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesList = ({ title, movies,isSearch }) => {
  return (
    <div className='px-8'>
      <h2 className={`${isSearch?"text-black":"text-white "} mb-4 text-2xl  mt-4`}>{title}</h2>
        <div className=" flex  overflow-x-auto no-scrollbar cursor-pointer">
          {movies?.map((movie) => (
             <div key={movie.id} className="mr-4 "> 
              <MoviesCard  path={movie.backdrop_path} />
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default MoviesList;

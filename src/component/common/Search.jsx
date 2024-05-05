import React from 'react'

const Search = ({setSearch,handleSearch}) => {
  return (
    <div className='border rounded-md bg-white flex items-center p-3 md:min-w-[450px] min-w-full ' >
     <input type='text' onChange={(e)=> setSearch(e.target.value)}  placeholder='Search movies' className='w-full outline-none' /> 
     <button onClick={handleSearch}  className='border rounded-md bg-black py-1 px-2  text-white'>Search</button>  
    </div>
  )
}

export default Search
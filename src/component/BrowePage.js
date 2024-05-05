import React, { useState } from "react";
import Search from "./common/Search";
import axios from "axios";
import { API_URL5, options } from "../constant";
import MoviesList from "./common/MoviesList";

const BrowePage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL5}${search}`, options);
      setData(response.data.results);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <>
      <div className="absolute top-[20%] left-1/3 z-10 ">
        <Search setSearch={setSearch} handleSearch={handleSearch} />
      </div>
    
          <div className="absolute top-[40%] left-8 z-10 text-white">
          {data.length ? (
          <MoviesList title="Search Movies" movies={data} />
        ): (<p>No Movies Found</p>)}
        </div>
    
    
    </>
  );
};

export default BrowePage;

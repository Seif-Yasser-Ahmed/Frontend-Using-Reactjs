// MovieContextProvider.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext();

export const MovieContextProvider = ({ children }) => {
  const [MovieArray, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
      .then((res) => setMovie(res.data.results));
  }, []);

  return (
    <MoviesContext.Provider value={{ MovieArray }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MovieContextProvider;

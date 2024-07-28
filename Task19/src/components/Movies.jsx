import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { v4 as uuid } from "uuid";

const Movies = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const [index, setIndex] = useState(0);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log("Movies - Mounted");
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((res) => {
        const moviesArr = res.results;
        setMoviesArr(moviesArr);
        setMovie(moviesArr[0]);
      });
  }, []);

  const handleClick = () => {
    if (index === moviesArr.length - 1) {
      alert("No more movies to show");
      setIndex(0);
      return;
    }
    setMovie({ ...moviesArr[index], completed: true });
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: "600px",
      }}
    >
      {moviesArr.length > 0 && (
        <Movie
          key={uuid()}
          movies={moviesArr[index]}
          posterPath={`https://image.tmdb.org/t/p/w500${moviesArr[index].poster_path}`}
          title={moviesArr[index].title}
          releaseDate={moviesArr[index].release_date}
          id={moviesArr[index].id}
          popularity={moviesArr[index].popularity}
          voteAverage={moviesArr[index].vote_average}
          voteCount={moviesArr[index].vote_count}
          adult={moviesArr[index].adult}
          handleclick={handleClick}
          index={index}
          allMovies={moviesArr}
        />
      )}
    </div>
  );
};

export default Movies;

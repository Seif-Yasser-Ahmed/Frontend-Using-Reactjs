import React, { useState } from "react";

const Movie = (props) => {
  //   const [index, setIndex] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      {
        <>
          <img
            style={{ width: "200px", height: "300px", borderRadius: "10px" }}
            src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
            alt={props.title}
          />
          <div>Title: {props.title}</div>
          <div>Release Date: {props.releaseDate}</div>
          <div>ID: {props.id}</div>
          <div>Popularity: {props.popularity}</div>
          <div>Vote Average: {props.voteAverage}</div>
          <div>Vote Count: {props.voteCount}</div>
          <div>+18: {props.adult ? "Yes" : "No"}</div>
          <hr />
        </>
      }
      <button onClick={props.handleclick}>Show Next Movie</button>
    </div>
  );
};

export default Movie;

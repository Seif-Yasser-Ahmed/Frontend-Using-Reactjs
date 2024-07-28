import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  //   const [index, setIndex] = useState(0);

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center", // Add this line to center the content horizontally
    //     // textAlign: "center",
    //     // width: "100%",
    //   }}
    // >
    //   {
    <Fragment>
      <div>
        <img
          style={{
            width: "200px",
            height: "300px",
            borderRadius: "10px",
          }}
          src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
          alt={props.title}
        />
      </div>
      <div>{props.title}</div>
      <br />
      <button onClick={props.handleclick}>Show Next Movie</button>
      <br />
      <br />
      <Link to={`/DetailsPage/${props.index}`}>More Details</Link>
      {/* </div> */}
    </Fragment>
  );
};

export default Movie;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7`
    )
      .then((res) => res.json())
      .then((res) => setUser(res.results));
    //   .then((res) => console.log(res.results));
  }, []);
  //   console.log(user[0]);
  if (!user) return <h1>Loading...</h1>;
  return (
    <div style={{ display: "flex", padding: "50px" }}>
      <div>
        <img
          style={{ width: "200px", height: "300px", borderRadius: "10px" }}
          src={`https://image.tmdb.org/t/p/w500${user[id].poster_path}`}
          alt={user[id].title}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          padding: "20px",
        }}
      >
        <h3>
          {" "}
          <span style={{ color: "red" }}>ID :</span> {user[id].id}
        </h3>
        <h3>
          <span style={{ color: "red" }}>Title:</span> {user[id].title}
        </h3>
        <h3>
          <span style={{ color: "red" }}>Release Date:</span>{" "}
          {user[id].release_date}
        </h3>
        <h3>
          <span style={{ color: "red" }}>Popularity:</span>{" "}
          {user[id].popularity}
        </h3>
        <h3>
          <span style={{ color: "red" }}>Vote Average:</span>{" "}
          {user[id].vote_average}
        </h3>
        <h3>
          <span style={{ color: "red" }}>Vote Count:</span>{" "}
          {user[id].vote_count}
        </h3>
        <h3>
          <span style={{ color: "red" }}>+18:</span>{" "}
          {user[id].adult ? "Yes" : "No"}
        </h3>
        <h3>
          <span style={{ color: "red" }}>Original Language: </span>
          {user[id].original_language.toUpperCase()}
        </h3>
        {/* <h3><span style={{ color: "red" }}>Original Title:</span> {user[id].original_title}</h3> */}
        <h3>
          <span style={{ color: "red" }}>Overview:</span> {user[id].overview}
        </h3>
        <h3>
          <span style={{ color: "red" }}></span>
          {user[id].email}
        </h3>
      </div>
    </div>
  );
};

export default DetailsPage;

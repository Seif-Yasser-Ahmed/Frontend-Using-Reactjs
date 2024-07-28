import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "aqua",
        padding: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/task">Task</Link>
      {/* <Link to="/users/add">Add User</Link> */}
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavBar;

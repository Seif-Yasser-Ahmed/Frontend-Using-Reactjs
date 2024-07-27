import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
const Form = ({ addUserFun }) => {
  const [user, setUser] = useState({ name: "", age: "" });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUserFun(user);
    setUser({ name: "", age: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
        <label>Age </label>
        <input
          type="text"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

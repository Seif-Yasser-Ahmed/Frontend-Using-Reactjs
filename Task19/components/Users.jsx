import React from "react";
import Card from "./Card";
import Form from "./Form";
// Add the following line to import the necessary dependencies
import { useState } from "react";
import { v4 as uuid } from "uuid";
const Users = () => {
  const [userArr, setUser] = useState([
    { id: uuid(), name: "seif", age: "10" },
    { id: uuid(), name: "Yasser", age: "20" },
    { id: uuid(), name: "Anas", age: "30" },
    { id: uuid(), name: "Adnan", age: "22" },
    { id: uuid(), name: "Mazen", age: "19" },
    { id: uuid(), name: "Mohamed", age: "50" },
  ]);

  const addUser = (user) => {
    setUser([...userArr, { ...user, id: uuid() }]);
  };
  return (
    <div>
      <Form addUserFun={addUser}></Form>
      {userArr.map((u) => {
        return <Card key={uuid()} id={uuid()} name={u.name} age={u.age}></Card>;
      })}
    </div>
  );
};

export default Users;

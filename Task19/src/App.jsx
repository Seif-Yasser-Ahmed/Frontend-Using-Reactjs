import "bootstrap/dist/css/bootstrap.css";
import Movies from "./components/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import DetailsPage from "./pages/DetailsPage";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const usersContext = createContext();

function App() {
  const [usersArr, setUsers] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState(0);

  const incAge = (userId) => {
    setUsers((oldUsers) =>
      oldUsers.map((u) => (u.id === userId ? { ...u, age: u.age + 1 } : u))
    );
  };
  const addUser = (data) => {
    setUsers((oldUsers) => [
      ...oldUsers,
      { ...data, id: uuid(), age: +data.age },
    ]);
    setCounter((oldCounter) => oldCounter + 1);
    if (counter >= 2) setDisabled(true);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      <usersContext.Provider
        value={{ incAge, counter, usersArr, addUser, disabled }}
      >
        <BrowserRouter>
          <NavBar></NavBar>
          {/* <Outlet></Outlet> */}
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="about" element={<About></About>} />
            <Route path="movies" element={<Movies></Movies>} />
            <Route path="DetailsPage" element={<DetailsPage></DetailsPage>} />
            <Route
              path="DetailsPage/:id"
              element={<DetailsPage></DetailsPage>}
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </usersContext.Provider>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Data from "../src/service/data";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./components/detail/detail";

function App() {
  const [shoes, setShoes] = useState(Data);

  return (
    <div>
      <Header />
      <Route exact path="/">
        <Main shoes={shoes} />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
    </div>
  );
}

export default App;

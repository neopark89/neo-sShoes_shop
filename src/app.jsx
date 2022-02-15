import React, { useState } from "react";
import "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Data from "../src/service/data";

function App() {
  const [shoes, setShoes] = useState(Data);

  return (
    <div>
      <Header />
      <Main shoes={shoes} />
    </div>
  );
}

export default App;

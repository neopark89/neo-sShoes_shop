import React, { useState } from "react";
import "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Data from "../src/service/data";
import { Route, Switch } from "react-router-dom";
import Detail from "./components/detail/detail";
import { ItemContext } from "./context/itemContext";

function App() {
  const [shoes, setShoes] = useState(Data);

  return (
    <ItemContext.Provider value={{shoes, setShoes}}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/detail/:no">
          <Detail/>
        </Route>
        <Route path="/:id">
          <div>아무거나 적었을때 이거 보여주세요</div>
        </Route>
      </Switch>
    </ItemContext.Provider>
  );
}

export default App;

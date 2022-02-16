import React from "react";
import { Button } from "react-bootstrap";
import style from "./main.module.css";
import Card from "./card";
// import { useContext } from 'react';
// import { ItemContext } from '../../context/itemContext';

const Main = () => {
  // const {shoes} = useContext(ItemContext);
  return (
    <section>
      <div className={style.background}>
        <h1>20% Season Off</h1>
        <p>This is a simple....</p>
        <p>
          <Button variant="primary"></Button>
        </p>
      </div>
      <Card />
    </section>
  );
};

export default Main;

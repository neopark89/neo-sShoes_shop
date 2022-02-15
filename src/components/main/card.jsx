import React from "react";
import style from "./card.module.css";

const Card = ({ shoes }) => {
  const shoesList = shoes.map((item,i) => {
    return (
      <li className={style.list} key={i}>
        <img
          className={style.image}
          src={'https://codingapple1.github.io/shop/shoes'+(i+1)+'.jpg'}
          alt="item"
        />
        <h4>{shoes[i].title}</h4>
        <p>
          {shoes[i].content} & {shoes[i].price}
        </p>
      </li>
    );
  });

  return <ul className={style.container}>{shoesList}</ul>;
};

export default Card;

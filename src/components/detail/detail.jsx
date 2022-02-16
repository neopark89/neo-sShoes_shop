import React, { useEffect, useRef } from "react";
import style from "./detail.module.css";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from 'react';
import { ItemContext } from '../../context/itemContext';

const Detail = () => {
  const {shoes} = useContext(ItemContext);

  const history = useHistory();
  const { no } = useParams();
  const clickItem = shoes.find((item) => item.id == no);
  const [alert, setAlert] = useState(true);
  const inputRef = useRef('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {clearTimeout(timer)}
  }, []);

  const popUp = () => {
    console.log(`안녕하세요! ${inputRef.current.value}`);
    inputRef.current.focus();
  };


  return (
    <section className={style.container}>
      <h1>Detail</h1>
      <input ref={inputRef}></input>
      <button type='text' onClick={popUp}>저장</button>
      {alert === true ? (
        <p className={style.alert}>재고가 얼마 남지 않았습니다.</p>
      ) : null}
      <img
        className={style.image}
        src="https://codingapple1.github.io/shop/shoes1.jpg"
        alt="item"
      />
      <div className={style.content}>
        <p>{clickItem.title}</p>
        <p>{clickItem.content}</p>
        <p>{clickItem.price}원</p>
        <button className={style.btn}>주문하기</button>
        <button
          className={style.btn2}
          onClick={() => {
            history.goBack();
          }}
        >
          뒤로가기
        </button>
      </div>
    </section>
  );
};

export default Detail;

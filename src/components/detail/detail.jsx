import React from "react";
import style from "./detail.module.css";

const Detail = () => {


  return (
    <section className={style.container}>
      <img
        className={style.image}
        src="https://codingapple1.github.io/shop/shoes1.jpg"
        alt="item"
      />
      <div className={style.content}>
        <h4>상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className={style.btn}>주문하기</button>
        <button className={style.btn2} onClick={() => {}}>
          뒤로가기
        </button>
      </div>
    </section>
  );
};

export default Detail;

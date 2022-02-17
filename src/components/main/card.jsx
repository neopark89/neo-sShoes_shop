import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../context/itemContext";
import style from "./card.module.css";
import axios from "axios";

const Card = () => {
  const { shoes, setShoes } = useContext(ItemContext);
  // const shoesList = shoes.map((item,i) => {
  //   return (
  //     <li className={style.list} key={i}>
  //       <img
  //         className={style.image}
  //         src={'https://codingapple1.github.io/shop/shoes'+(i+1)+'.jpg'}
  //         alt="item"
  //       />
  //       <h4>{shoes[i].title}</h4>
  //       <p>
  //         {shoes[i].content} & {shoes[i].price}
  //       </p>
  //     </li>
  //   );
  // });

  return (
    <>
      <section className={style.container}>
        {shoes.map((item, i) => (
          <li className={style.list} key={i}>
            <img
              className={style.image}
              src={
                "https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"
              }
              alt="item"
            />
            <h4>{shoes[i].title}</h4>
            <p>
              {shoes[i].content} & {shoes[i].price.toLocaleString("ko-KR", { style: 'currency', currency: 'KRW'})}
            </p>
          </li>
        ))}
      </section>
      <button className={style.button} onClick={() => {
      //로딩 중이라는 ui 띄움
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
          //로딩 중이라는 ui 안보이게 처리
          // console.log(result.data);
          // const newList = [...shoes];
          // newList.push([...result.data]);
          // setShoes(newList);
          setShoes([...shoes, ...result.data])
        })
        .catch(() => {

        })
      }}>더보기</button>
    </>
  );
};

export default Card;

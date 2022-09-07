import React, { useState } from "react";
import "./item.css";

export function Item(props) {
  const [amountItem, setAmount] = useState(0);

  const plusItem = () => {
    setAmount(amountItem + 1);
    props.calback(props, true);
  };

  const reduceItem = () => {
    if (amountItem > 0) {
      setAmount(amountItem - 1);
      props.calback(props, false);
    }
  };
  return (
    <div className="listMarket">
      <p>Name: {props.Name}</p>
      <p>Description: {props.Desc}</p>
      <p>Price: {props.Price}</p>
      <h5>
        SL: <button onClick={plusItem}>+</button> {amountItem}{" "}
        <button onClick={reduceItem}>-</button>
      </h5>
    </div>
  );
}
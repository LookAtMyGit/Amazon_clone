import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = props.price.toFixed(2);
  return (
    <li className={classes["cart__item"]} key={props.id}>
      <div className={classes["cart__descr"]}>
        <div className={classes["cart__img"]}>
          <img src={props.image} alt="cart" />
        </div>
        <div className={classes["cart__descr__title"]}>
          <p>{props.title}</p>
        </div>
      </div>
      <div className={classes["cart__control"]}>
        <div className={classes["cart__control__amount"]}>
          <p>x {props.amount}</p>
        </div>
        <div className={classes["cart__control__buttons"]}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
        <div className={classes["cart__price"]}>
          <p>
            Item Price: <strong>${price}</strong>
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

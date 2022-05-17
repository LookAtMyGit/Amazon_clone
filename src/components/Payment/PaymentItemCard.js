import React from "react";
import classes from "./PaymentItemCard.module.css";
const PaymentItemCard = ({ id, image, title, amount, price, onRemove }) => {
  const itemPrice = price.toFixed(2);
  return (
    <li className={classes["payment__item"]} key={id}>
      <div className={classes["payment__descr"]}>
        <div className={classes["payment__img"]}>
          <img src={image} alt="item" />
        </div>
        <div className={classes["payment__descr__title"]}>
          <p>{title}</p>
        </div>
      </div>
      <div className={classes["payment__control"]}>
        <div className={classes["payment__control__amount"]}>
          <p>x {amount}</p>
        </div>
        <div className={classes["payment__control__buttons"]}>
          <button onClick={onRemove}>Remove</button>
        </div>
        <div className={classes["payment__price"]}>
          <p>
            Item Price: <strong>${itemPrice}</strong>
          </p>
        </div>
      </div>
    </li>
  );
};

export default PaymentItemCard;

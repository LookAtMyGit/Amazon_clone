import React, { useContext } from "react";
import ProductForm from "./ProductForm";
import classes from "./ProductCard.module.css";
import CartContext from "../../store/cart-context";
const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      rating: props.rating,
      image: props.image,
    });
  };
  return (
    <div className={classes.product} key={props.id}>
      <div className={classes["product__info"]}>
        <p>{props.title}</p>
        <p className={classes["product__price"]}>
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className={classes["product__rating"]}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={Math.random()}>🌟</p>
            ))}
        </div>
      </div>
      <div className={classes["product__image"]}>
        <img src={props.image} alt="product" />
      </div>
      <ProductForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
  );
};

export default ProductCard;

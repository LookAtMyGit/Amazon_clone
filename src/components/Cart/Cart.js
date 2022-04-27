import React from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length === 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart__list"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <div className={classes.cart}>
      <div className={classes["cart__left"]}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492669_.jpg"
          alt="cart header"
        />
        <div>
          <h2 className={classes["cart__left__title"]}>Your Shopping Cart</h2>
        </div>
        {hasItems && (
          <div className={classes["cart__left__noItems"]}>
            <ProductionQuantityLimitsIcon
              fontSize="large"
              sx={{ color: "#febd69" }}
            />
            <p>
              There are no items in your Cart. Please choose something funny :)
            </p>
          </div>
        )}
        {cartItems}
      </div>
      <div className={classes["cart__right"]}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;

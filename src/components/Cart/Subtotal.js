import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import classes from "./Subtotal.module.css";
import CartContext from "../../store/cart-context";
const Subtotal = () => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length === 0;
  const totalAmount = cartCtx.totalAmount;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const navigate = useNavigate();
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        decimalScale={2}
        value={totalAmount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(totalAmount) => (
          <>
            <p>
              Subtotal ({numberOfCartItems} items):
              <strong>{totalAmount}</strong>
            </p>
            <div className={classes["cart__label"]}>
              <input type="checkbox" id="check" />
              <label htmlFor="check">This order contains a gift</label>
            </div>
          </>
        )}
      />
      <button
        disabled={hasItems}
        className={classes["subtotal__button"]}
        onClick={(e) => navigate("/payment")}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Subtotal;

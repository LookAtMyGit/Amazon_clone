import React, { useContext } from "react";
import classes from "./Payment.module.css";
import PaymentItemCard from "./PaymentItemCard";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../store/AuthProvider";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Payment = () => {
  //context from CartContext
  const cartCtx = useContext(CartContext);
  //context from AuthProvider
  const { user } = useUserAuth();

  //CartContext Handling
  const hasItems = cartCtx.items.length === 0;
  const totalAmount = cartCtx.totalAmount;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const paymentItemRemoveHandler = (id) => {
    cartCtx.removeFromPayment(id);
  };
  const paymentItemCard = (
    <ul className={classes["cart__list"]}>
      {cartCtx.items.map((item) => (
        <PaymentItemCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          amount={item.amount}
          onRemove={paymentItemRemoveHandler.bind(null, item.id)}
        ></PaymentItemCard>
      ))}
    </ul>
  );

  //Stripe handling

  const paymentSubmitHandler = async (e) => {
    //stripe logic
  };

  const paymentInputHandler = (e) => {};

   const cardElementOptions = {
     hidePostalCode: true,
   }
  return (
    <div className={classes.payment}>
      <div className={classes["payment__top"]}>
        <h1>
          Cart
          <Link to="/cart"> ({numberOfCartItems} items)</Link>
        </h1>
      </div>
      <div className={classes["payment__container"]}>
        <section className={classes["payment__section"]}>
          <div className={classes["payment__section_title"]}>
            <h3>Delivery Address</h3>
          </div>
          <div className={classes["payment__section_descr"]}>
            <p>{user?.email}</p>
            <p>29 Howe Street</p>
            <p>Christchurch 8083, New Zealand</p>
          </div>
        </section>
        <section className={classes["payment__section"]}>
          <div className={classes["payment__section_title"]}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={classes["payment__section_descr"]}>
            <div className={classes["payment__section_items"]}>
              {hasItems && (
                <div className={classes["payment__section__noItems"]}>
                  <ProductionQuantityLimitsIcon
                    fontSize="large"
                    sx={{ color: "#febd69" }}
                  />
                  <p>
                    There are no items in your Cart. Please choose something
                    funny
                  </p>
                </div>
              )}
              {paymentItemCard}
            </div>
          </div>
        </section>
        <section className={classes["payment__section"]}>
          <div className={classes["payment__section_title"]}>
            <h3>Payment Method</h3>
          </div>
          <div className={classes["payment__section_descr"]}>
            <div className={classes["payment__section_descr_details"]}>
              <p>Card Details</p>
              <form
                className={classes["payment__section_descr_details_card"]}
                onSubmit={paymentSubmitHandler}
              >
                <CardElement options={cardElementOptions} onChange={paymentInputHandler} />
                <div
                  className={classes["payment__section_descr_details_order"]}
                >
                  <CurrencyFormat
                    decimalScale={2}
                    value={totalAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    renderText={(totalAmount) => (
                      <>
                        <p>Order Total: {totalAmount}</p>
                      </>
                    )}
                  />
                  <button disabled={hasItems}>Buy Now</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;

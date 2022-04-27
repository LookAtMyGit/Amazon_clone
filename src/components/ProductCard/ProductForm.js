import React, { useRef, useState } from "react";
import Input from "../UI/Input/Input";
import classes from "./ProductForm.module.css";

const ProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = Number(enteredAmount);
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes["product__form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.action}>Add to Cart</button>
      <p className={amountIsValid ? classes.valid : ""}>
        Please enter a valid amount(1-5)
      </p>
    </form>
  );
};

export default ProductForm;

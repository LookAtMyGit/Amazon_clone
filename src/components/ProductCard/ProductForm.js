import React, { useRef, useState } from "react";
import Input from "../UI/Input/Input";
import classes from "./ProductForm.module.css";

const inputProps = {
  type: "number",
  min: "1",
  max: "5",
  step: "1",
  defaultValue: "1",
};

const ProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = Number(enteredAmount);
    // условие в переменные 
    const inputIsValid =
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5;

    if (inputIsValid) {
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
        inputId={props.id}
        input={inputProps}
      />
      <button className={classes.action}>Add to Cart</button>
      <p className={amountIsValid ? classes.valid : ""}>
        Please enter a valid amount(1-5)
      </p>
    </form>
  );
};

export default ProductForm;

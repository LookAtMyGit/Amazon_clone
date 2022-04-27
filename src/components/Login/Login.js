import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import classes from "./Login.module.css";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const emailInputHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const signIn = (event) => {
    event.preventDefault();
    const useSingInData = {
      email: userEmail,
      
      password: userPassword,
    };
  };
  const registerUser = (event) => {
    event.preventDefault();
    try {
  const userRegData = createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        //it means we succsefully created a new user.
        const user = userCredential.user;
        console.log(user);
      })
      console.log(userRegData);
    }

      catch (error) {
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
        
      };
  };
  return (
    <div className={classes.login}>
      <div className={classes["login__container"]}>
        <Link to="/">
          <img
            className={classes["login__logo"]}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="logo"
          />
        </Link>
        <div className={classes["login__card"]}>
          <form className={classes["login__form"]}>
            <h1>Sing In</h1>
            <div className={classes["login__form__info"]}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={userEmail}
                onChange={emailInputHandler}
              />
            </div>
            <div className={classes["login__form__info"]}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={userPassword}
                onChange={passwordInputHandler}
              />
            </div>
            <button
              className={classes["login__form_signIn"]}
              type="submit"
              onClick={signIn}
            >
              Sing In
            </button>
          </form>
          <p className={classes["login__message"]}>
            By singing-In you agree to the AMAZON FAKE CLONE Conditions of Use
            and Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button
            className={classes["login__form_createAccount"]}
            onClick={registerUser}
          >
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

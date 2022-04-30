import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp, login, logout, useAuth } from "./../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./Login.module.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailInputHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const registerUserHandler = async (e) => {
    e.preventDefault();
    setUserPassword(e.target.value);
    try {
      setLoading(true);
      await signUp(userEmail, userPassword);
      setSuccess(true);
      toast.success(`${userEmail} was successfully registered!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setError(true);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(userEmail, userPassword);
      setSuccess(true);
      toast.success(`${userEmail} logged in!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setError(true);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  };

  const logOutUserHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await logout();
    } catch (error) {
      setError(true);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
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
            <div>
              Currently logged in as:
              <br />
              {currentUser?.email}
            </div>
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
              onClick={signInHandler}
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
            disabled={loading || currentUser}
            onClick={registerUserHandler}
          >
            Create your Amazon Account
          </button>
          <button
            className={classes["login__form_createAccount"]}
            disabled={loading || !currentUser}
            onClick={logOutUserHandler}
          >
            Log Out
          </button>
          {error && (
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          )}
          {success && (
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

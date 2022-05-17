import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../store/AuthProvider";
import GoogleButton from "react-google-button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, logIn, user, googleSignIn } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const registerUserHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signUp(email, password);
      setSuccess(true);
      toast.success(`${email} was successfully registered!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      await new Promise(() => setTimeout(() => navigate("/"), 2000));
    } catch (error) {
      setError(true);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
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
      await logIn(email, password);
      setSuccess(true);
      toast.success(`${email} logged in!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      await new Promise(() => setTimeout(() => navigate("/"), 2000));
    } catch (error) {
      setError(true);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoading(false);
  };
const googleSignInHandler = async (e) => {
  e.preventDefault();
   try {
      setLoading(true);
      await googleSignIn();
      setSuccess(true);
      toast.success(`${email} logged in via Google Account!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      await new Promise(() => setTimeout(() => navigate("/"), 2000));
    } catch (error) {
      setError(true);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
}

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
            <h1>Sign In</h1>
            <div className={classes["login__form_userData"]}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={emailInputHandler}
              />
            </div>
            <div className={classes["login__form_userData"]}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={passwordInputHandler}
              />
            </div>
            <button
              className={classes["login__form_signIn"]}
              type="submit"
              onClick={signInHandler}
              disabled={loading || user}
            >
              Sign In
            </button>
            <p className={classes["login__message"]}>
              By singing-In you agree to the AMAZON FAKE CLONE Conditions of Use
              and Sale. Please see our Privacy Notice, our Cookies Notice and
              our Interest-Based Ads Notice.
            </p>
            <button
              className={classes["login__form_createAccount"]}
              disabled={loading || user}
              onClick={registerUserHandler}
            >
              Create your Amazon Account
            </button>
            <div className={classes["login__form_googleBtn"]}>
              <GoogleButton
                disabled={loading || user}
                onClick={googleSignInHandler}
              ></GoogleButton>
            </div>
          </form>
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

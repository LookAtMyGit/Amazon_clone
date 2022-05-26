//доделать адаптив (перенос инпута на след строку, остальное вверху)
//вынести корзину в отдельный компонент.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../store/AuthProvider";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderCartButton from "./HeaderCartButton";
// import { PropaneSharp } from "@mui/icons-material";

const Header = (props) => {
  const { user, logout } = useUserAuth();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Validity checking!");
      props.onSendSearch(search);
    }, 500);
    return () => {
      console.log("Cleanup!");
      clearTimeout(identifier);
    };
  }, [search]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const logoutHandler = () => {
    if (user) {
      logout();
    }
  };
  return (
    <div className={classes.header}>
      <Link to="/" className={classes["header__logo"]}>
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon img"
        />
      </Link>
      <div className={classes["header__search"]}>
        <input
          type="text"
          placeholder="Search Amazon"
          value={search}
          onChange={searchHandler}
        />
        <div className={classes["header__searchIcon"]}>
          <SearchIcon />
        </div>
      </div>
      <ul className={classes["header__nav"]}>
        <li>
          <Link to={!user && "/login"} className={classes["header__link"]}>
            <div
              className={classes["header__link_container"]}
              onClick={logoutHandler}
            >
              <span className={classes["header__linkLineOne"]}>
                Hello {user ? user?.email : "Guest"}
              </span>
              <span className={classes["header__linkLineTwo"]}>
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
        </li>
        <li>
          <a href="/" className={classes["header__link"]}>
            <div className={classes["header__link_container"]}>
              <span className={classes["header__linkLineOne"]}>Returns</span>
              <span className={classes["header__linkLineTwo"]}>& Orders</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/" className={classes["header__link"]}>
            <div className={classes["header__link_container"]}>
              <span className={classes["header__linkLineOne"]}>Your</span>
              <span className={classes["header__linkLineTwo"]}>Prime</span>
            </div>
          </a>
        </li>
      </ul>
      <Link to="/cart">
        <HeaderCartButton />
      </Link>
    </div>
  );
};

export default Header;

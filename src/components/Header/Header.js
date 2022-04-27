//доделать адаптив (перенос инпута на след строку, остальное вверху)
//вынести корзину в отдельный компонент.
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";

import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/" className={classes["header__logo"]}>
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon img"
        />
      </Link>
      <div className={classes["header__search"]}>
        <input type="text" placeholder="Search Amazon" />
        <div className={classes["header__searchIcon"]}>
          <SearchIcon />
        </div>
      </div>
      <ul className={classes["header__nav"]}>
        <li>
          <Link to="/login" className={classes["header__link"]}>
            <span className={classes["header__linkLineOne"]}>Hello Guest</span>
            <span className={classes["header__linkLineTwo"]}>Sign In</span>
          </Link>
        </li>
        <li>
          <a href="/" className={classes["header__link"]}>
            <span className={classes["header__linkLineOne"]}>Returns</span>
            <span className={classes["header__linkLineTwo"]}>& Orders</span>
          </a>
        </li>
        <li>
          <a href="/" className={classes["header__link"]}>
            <span className={classes["header__linkLineOne"]}>Your</span>
            <span className={classes["header__linkLineTwo"]}>Prime</span>
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

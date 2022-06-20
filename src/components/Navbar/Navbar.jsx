import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.scss";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <nav className={style.wrapper}>
      <div className={style.navbar}>
        <Search />
        <div className={style.buttons}>
          <Link style={{ textDecoration: "none" }} to="/Cart">
            <div className={style.cartbtn}>
              <img src="#" alt="cartButton" />
              <span>cart</span>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Favorites">
            <div className={style.favorbtn}>
              <img src="#" alt="favoriteButton" />
            </div>
          </Link>
          <div className={style.loginbtn}>
            <img src="#" alt="LoginButton" />
            <span>Вход</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

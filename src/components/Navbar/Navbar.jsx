import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.scss";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <nav className={style.wrapper}>
      <div className={style.navbar}>
        <div className={style.category}>
          <button>category</button>
        </div>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.buttons}>
          <div className={style.cartbtn}>
            <Link style={{ textDecoration: "none" }} to="/Cart">
              <img src="#" alt="cart" />
              <span></span>
            </Link>
          </div>

          <div className={style.favorbtn}>
            <Link style={{ textDecoration: "none" }} to="/Favorites">
              <img src="#" alt="fav" />
              <span></span>
            </Link>
          </div>

          <div className={style.loginbtn}>
            <img src="#" alt="log" />
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

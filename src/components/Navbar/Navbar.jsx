import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//components
import Search from "../Search/Search";
import loginicon from "../../assets/icons/login.svg";
import favoricon from "../../assets/icons/favor.svg";
import carticon from "../../assets/icons/cart.svg";
//style
import style from "./navbar.module.scss";
const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <nav className={style.wrapper}>
      <div className={style.navbar}>
        <div className={style.category}>
          <button>burger</button>
        </div>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.buttons}>
          <div className={style.favorbtn}>
            <Link style={{ textDecoration: "none" }} to="/Favorites">
              <img src={favoricon} alt="fav" />
              <span></span>
            </Link>
          </div>
          <div className={style.cartbtn}>
            <Link style={{ textDecoration: "none" }} to="/Cart">
              <img src={carticon} alt="cart" />
              <span className={items.length > 0 ? style.active : ""}>
                {totalCount}
              </span>
            </Link>
          </div>
          <div className={style.loginbtn}>
            <Link style={{ textDecoration: "none" }} to="*">
              <img src={loginicon} alt="log" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

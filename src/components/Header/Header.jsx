import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import location from "../../assets/icons/location.svg";
const Header = () => {
  return (
    <header className={style.wrapper}>
      <div className={style.header}>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className={style.logo}>
            <img src={logo} alt="logo" />
            <h1 className={style.tittle}>Online shop</h1>
          </div>
        </Link>
        <div className={style.services}>
          <div className={style.phones}>
            <ul>
              <li>
                <b>A1</b>
                <span>+375 44 000 00 00</span>
              </li>
              <li>
                <b>MTC</b>
                <span>+375 33 000 00 00</span>
              </li>
              <li>
                <b>Life </b>
                <span>+375 25 000 00 00</span>
              </li>
            </ul>
          </div>
          <div className={style.callback}>
            <button>Заказать звонок</button>
          </div>
          <Link style={{ textDecoration: "none" }} to="*">
            <div className={style.location}>
              <img src={location} alt="location" />
              <span>Адреса магазинов</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import location from "../../assets/icons/location.svg";

const Header = () => {
  return (
    <header className={style.wrapper}>
      <div className={style.header}>
        <Link className={style.logo} to="/">
          <img src={logo} alt="logo" />
          <h1 className={style.tittle}>Online shop</h1>
        </Link>
        <div className={style.services}>
          <div className={style.phones}>
            <ul>
              <li>
                <h4>A1</h4>
                <span>+375 44 000 00 00</span>
              </li>
              <li>
                <h4>MTC</h4>
                <span>+375 33 000 00 00</span>
              </li>
              <li>
                <h4>Life </h4>
                <span>+375 25 000 00 00</span>
              </li>
            </ul>
          </div>
          <Link style={{ textDecoration: "none" }} to="*">
            <button className={style.callback}>
              <b>Заказать звонок</b>
            </button>
          </Link>
          <div className={style.location}>
            <Link style={{ textDecoration: "none" }} to="*">
              <img src={location} alt="location" />
              <span>Адреса магазинов</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

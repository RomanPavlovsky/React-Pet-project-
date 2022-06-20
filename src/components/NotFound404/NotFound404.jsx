import React from "react";
import style from "./notfound.module.scss";
import error from "./404.png";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Oops! Page Not Found! </h2>
      <div className={style.image}>
        <img src={error} alt="404 Not Found" />
      </div>
      <Link className={style.link} to="/">
        <button className={style.button}>Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound404;

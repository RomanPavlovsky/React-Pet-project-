import React from "react";
import { Link } from "react-router-dom";
import style from "./favorite.module.scss";
const Favorites = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.favorite}>
        <div className={style.top}>
          <div className={style.title}>
            <h2>Избранное</h2>
          </div>
          <div className={style.clear}>
            <button>Удалить из избранного</button>
          </div>
        </div>
        <div className={style.items}>
          <h3>Товар</h3>
          <h3>Цена за ед.</h3>
          <h3>удалить товар</h3>
        </div>
        <div className={style.bottom}>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className={style.backbtn}>
              <button>Вернутся назад</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

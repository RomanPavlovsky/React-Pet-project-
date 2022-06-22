import React from "react";
import { Link } from "react-router-dom";
import style from "./cart.module.scss";
const Cart = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.cart}>
        <div className={style.top}>
          <div className={style.title}>
            <h2>Корзина:</h2>
          </div>
          <div className={style.clearbtn}>
            <button>Очистить корзину</button>
          </div>
        </div>
        <div className={style.items}>
          <h3>Товар</h3>
          <h3>Кол-во</h3>
          <h3>Цена за ед.</h3>
          <h3>удалить товар</h3>
        </div>
        <div className={style.bottom}>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className={style.backbtn}>
              <button>Вернутся назад</button>
            </div>
          </Link>
          <div className={style.buybtn}>
            <button>ОФОРМИТЬ ЗАКАЗ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

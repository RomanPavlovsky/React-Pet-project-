import React from "react";
import { Link } from "react-router-dom";
import style from "./cart.module.scss";
const Cart = () => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.title}>
          <h2>Ваша Корзина:</h2>
        </div>
        <div className={style.clearbtn}>
          <button>Очистить корзину</button>
        </div>
      </header>
      <section className={style.items}>Выбранные товары.(таблица)</section>
      <footer className={style.footer}>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className={style.backbtn}>
            <button>Вернутся назад</button>
          </div>
        </Link>
        <div className={style.buybtn}>
          <button>ОФОРМИТЬ ЗАКАЗ</button>
        </div>
      </footer>
    </div>
  );
};

export default Cart;

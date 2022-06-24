import React from "react";
import { Link } from "react-router-dom";
import style from "./cart.module.scss";
import { useDispatch, useSelector } from "react-redux";

import Cartitem from "../components/CartItem/Cartitem";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={style.wrapper}>
      <div className={style.cart}>
        <div className={style.top}>
          <div className={style.title}>
            <h2>Ваша корзина:</h2>
          </div>
          <div className={style.clearbtn}>
            <button>Очистить корзину</button>
          </div>
        </div>
        <div className={style.items}>
          {items.map((item) => (
            <Cartitem key={item.id} {...item} />
          ))}
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

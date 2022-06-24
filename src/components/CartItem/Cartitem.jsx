import React from "react";
import style from "./cartitem.module.scss";
import basket from "../../assets/icons/basket.svg";
import addicon from "../../assets/icons/add.svg";
import deliteicon from "../../assets/icons/delite.svg";
import { useDispatch } from "react-redux";
import { addItems, minusItem, removeItems } from "../../Redux/Slices/cartSlice";
const Cartitem = ({ id, price, count, image, title }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItems({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm("Вы хотиту удалить товар?")) {
      dispatch(removeItems(id));
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <img src={image} alt="item" />
      </div>
      <div className={style.title}>
        <b> {title}</b>
      </div>
      <div className={style.count}>
        <div onClick={onClickMinus}>
          <img src={deliteicon} alt="" />
        </div>
        <b>{count}</b>
        <div onClick={onClickPlus}>
          <img src={addicon} alt="add" />
        </div>
      </div>
      <div className={style.price}>
        <b>{price * count}$</b>
      </div>
      <div onClick={onClickRemove} className={style.delite}>
        <img src={basket} alt="trash" />
      </div>
    </div>
  );
};

export default Cartitem;

import React from "react";
// import AddButton from "../AddCartButton/AddCartButton";
// import AddFavoriteButton from "../AddFavoriteButton/AddFavoriteButton";
import style from "./itemcard.module.scss";

const ProductCard = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.photo}>
        <img src={props.image} alt="itemphoto" />
      </div>
      <div className={style.title}>
        <h3>{props.title}</h3>
      </div>
      <div className={style.rating}>
        <span>{props.rating.rate}</span>
      </div>
      <div className={style.btnblock}>
        <div className={style.price}>
          <span>{props.price}$</span>
        </div>
        {/* <AddFavoriteButton />
        <AddButton /> */}
      </div>
    </div>
  );
};

export default ProductCard;

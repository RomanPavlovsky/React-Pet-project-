import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
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
        <Rating
          ratingValue={props.rating.rate * 20}
          size={26}
          readonly={true}
        />
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

import React from "react";
import { Rating } from "react-simple-star-rating";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../../Redux/Slices/cartSlice";
//styles
import style from "./itemcard.module.scss";
import favroticon from "../../assets/icons/favor.svg";

const ProductCard = ({ id, title, rating, image, price }) => {
  //add to cart
  const cartItem = useSelector((state) =>
    state.cart.items.find((arr) => arr.id === id)
  );
  const addCart = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      title,
      image,
      price,
    };
    dispatch(addItems(item));
  };
  return (
    <div className={style.wrapper}>
      <div className={style.photo}>
        <img src={image} alt="itemphoto" />
      </div>
      <div className={style.title}>
        <h3>{title}</h3>
      </div>
      <div className={style.rating}>
        <span>{rating}</span>
        <Rating ratingValue={rating * 20} size={26} readonly={true} />
      </div>
      <div className={style.btnblock}>
        <div className={style.price}>
          <span>{price}$</span>
        </div>
        <button className={style.favorit}>
          <img src={favroticon} alt="favorite" />
        </button>

        <button onClick={onClickAdd} className={style.buy}>
          Купить {addCart > 0 && <b>{addCart}</b>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

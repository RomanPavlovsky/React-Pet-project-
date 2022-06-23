import React, { memo } from "react";
import style from "./categor.module.scss";

const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    "Все",
    "Мужская одежда",
    "Женская одежда",
    "Электроника",
    "Украшения",
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.categories}>
        <ul>
          {categories.map((name, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? style.active : ""}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

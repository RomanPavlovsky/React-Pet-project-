import React, { useState } from "react";
import style from "./categor.module.scss";

const Categories = (active, setActive) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Все",
    "Мужская одежда",
    "Женская одежда",
    "Электроника",
    "Украшения",
  ];
  const onClickCategory = (i) => setActiveIndex(i);
  return (
    <div className={style.wrapper}>
      <div className={style.categories}>
        <ul>
          {categories.map((value, i) => (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={activeIndex === i ? style.active : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;

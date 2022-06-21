import React, { useState } from "react";
import style from "./sort.module.scss";

const Sort = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.wrapper}>
      <div className={style.label}>
        <b>Сортировка по: </b>
        <span onClick={() => setOpen(!open)}>Рейтингу</span>
      </div>
      {open && (
        <div className={style.popup}>
          <ul>
            <li>По Цене </li>
            <li>по Рейтингу</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

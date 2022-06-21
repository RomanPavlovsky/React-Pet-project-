import React, { useState } from "react";
import style from "./sort.module.scss";

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const SortList = ["Рейтингу", "Цене"];
  const onSort = (i) => {
    setActive(i);
    setOpen(false);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.label}>
        <b>Сортировка по: </b>
        <span onClick={() => setOpen(!open)}>{SortList[active]}</span>
      </div>
      {open && (
        <div className={style.popup}>
          <ul>
            {SortList.map((value, i) => (
              <li
                key={i}
                onClick={() => onSort(i)}
                className={active === i ? style.active : ""}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

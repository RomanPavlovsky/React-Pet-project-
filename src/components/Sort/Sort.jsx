import React from "react";
import style from "./sort.module.scss";
import { useState } from "react";

const Sort = ({ value, onChangeSort }) => {
  const [open, setOpen] = useState(false);

  const SortList = [
    { name: "возрастанию Рейтинга", sortProperty: "+rating" },
    { name: "убыванию Рейтинга", sortProperty: "rating" },
    { name: "возрастанию Цены", sortProperty: "+price" },
    { name: "убыванию Цены", sortProperty: "price" },
  ];

  const onSort = (i) => {
    onChangeSort(i);
    setOpen(false);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.label}>
        <b>Сортировка по: </b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className={style.popup}>
          <ul>
            {SortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onSort(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? style.active : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

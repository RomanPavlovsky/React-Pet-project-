import React from "react";
import style from "./sort.module.scss";
import { useState, useRef, useEffect } from "react";

const Sort = ({ value, onChangeSort }) => {
  const [open, setOpen] = useState(false);
  const SortList = [
    { name: "возрастанию Рейтинга", sortProperty: "+rating" },
    { name: "убыванию Рейтинга", sortProperty: "rating" },
    { name: "возрастанию Цены", sortProperty: "+price" },
    { name: "убыванию Цены", sortProperty: "price" },
  ];
  //Popup
  const onSort = (i) => {
    onChangeSort(i);
    setOpen(false);
  };
  //close popup ref
  const sortRef = useRef();
  useEffect(() => {
    const closeOnClick = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", closeOnClick);
    return () => {
      document.body.removeEventListener("click", closeOnClick);
    };
  }, []);
  return (
    <div className={style.wrapper}>
      <div ref={sortRef} className={style.label}>
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

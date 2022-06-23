//library
import React, { useContext } from "react";
// import axios from "axios";
// //react
import { useState, useEffect } from "react";
import { SearchContext } from "../App";
//redux
// import { useSelector, useDispatch } from "react-redux";
// import { setCategoryId, setSort } from "../Redux/Slices/filterSlice";
//components
import ItemCard from "../components/ItemCard/ItemCard";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
//style
import style from "./home.module.scss";

const Home = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "Рейтингу",
    sortProperty: "rating",
  });

  useEffect(() => {
    const order = sortType.sortProperty.includes("+") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("+", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    fetch(
      `https://62b413c3a36f3a973d2b56f5.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, [categoryId, sortType, searchValue]);

  return (
    <div className={style.wrapper}>
      <div className={style.home}>
        <section className={style.menu}>
          <Categories
            value={categoryId}
            onChangeCategory={(i) => setCategoryId(i)}
          />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        </section>
        <section className={style.products}>
          {items.map((arr) => (
            <ItemCard key={arr.id} {...arr} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;

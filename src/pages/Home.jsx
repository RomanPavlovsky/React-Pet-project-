//library
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../Redux/Store";
import { setCategoryID } from "../Redux/Slices/filterSlice";
//components
import ItemCard from "../components/ItemCard/ItemCard";
import Categories from "../components/Categories/Categories";
//style
import style from "./home.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.filterSlice.categoryID);
  const onChangeCategory = (id) => {
    dispatch(setCategoryID(id));
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?category")
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.home}>
        <section className={style.menu}>
          <Categories value={categoryID} onChangeCategory={onChangeCategory} />
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

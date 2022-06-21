import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard/ItemCard";
import Sort from "../components/Sort/Sort";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);
  // const [searchValue, SetSearchValue] = useState("");
  return (
    <div className="homeWrapper">
      {/* <Slider /> */}
      <section className="productSection">
        <Sort />
        {items.map((arr) => (
          <ItemCard key={arr.id} {...arr} />
        ))}
      </section>
    </div>
  );
};

export default Home;

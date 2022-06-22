import React from "react";
import style from "./search.module.scss";
import SearchIcon from "./search-icon.svg";

const Search = () => {
  return (
    <div>
      <form className={style.wrapper}>
        <input className={style.input} type="text" placeholder="Search..." />
        <button className={style.button}>
          <img src={SearchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Search;

import React from "react";
import style from "./search.module.scss";
import SearchIcon from "./search-icon.svg";

const Search = () => {
  return (
    <div>
      <form className={style.wrapper}>
        <input
          className={style.search_input}
          type="text"
          placeholder="Search..."
        />
        <button className={style.search_btn}>
          <img src={SearchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Search;

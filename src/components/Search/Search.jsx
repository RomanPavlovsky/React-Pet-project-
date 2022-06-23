import React, { useContext } from "react";
import style from "./search.module.scss";
import SearchIcon from "./search-icon.svg";
import closeIcon from "./close-icon.svg";
import { SearchContext } from "../../App";
const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div>
      <form className={style.wrapper}>
        <input
          className={style.input}
          placeholder="Search..."
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
        />
        {searchValue && (
          <div onClick={() => setSearchValue("")} className={style.clear}>
            <img src={closeIcon} alt="close" />
          </div>
        )}
        <button className={style.button}>
          <img src={SearchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Search;

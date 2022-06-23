import React, { useContext, useRef, useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { SearchContext } from "../../App";
import SearchIcon from "./search-icon.svg";
import closeIcon from "./close-icon.svg";
import style from "./search.module.scss";
const Search = () => {
  //autotarget after close
  const inputRef = useRef();
  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };
  //serach with context
  const { setSearchValue } = useContext(SearchContext);
  //debounche
  const [value, setValue] = useState("");
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div>
      <form className={style.wrapper}>
        <input
          ref={inputRef}
          className={style.input}
          placeholder="Search..."
          onChange={onChangeInput}
          value={value}
        />
        {value && (
          <div onClick={onClickClear} className={style.clear}>
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

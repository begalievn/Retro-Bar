import React, { useState } from "react";

import classes from "./InputSearch.module.css";
import SearchBtn from "../SearchBtn/SearchBtn";

const InputSearch = (props) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={classes.inputSearchBlock}>
      <input
        onChange={inputHandler}
        value={inputValue}
        className={classes.inputSearch}
        {...props}
      ></input>
      <SearchBtn className={classes.inputSearchBtn} />
    </div>
  );
};

export default InputSearch;

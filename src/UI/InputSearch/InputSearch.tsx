import React, { useState } from "react";

import classes from "./InputSearch.module.css";
import SearchBtn from "../SearchBtn/SearchBtn";
import {someClasses} from "../../utils/someClasses";

const InputSearch = (props: React.HTMLProps<HTMLInputElement>) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


    return (
    <div className={classes.inputSearchBlock}>
      <input
        onChange={inputHandler}
        value={inputValue}
        className={classes.inputSearch}
        {...props}
      />
      <SearchBtn className={classes.inputSearchBtn} />
    </div>
  );
};

export default InputSearch;

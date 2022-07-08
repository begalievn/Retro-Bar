import React, { useState } from "react";

import classes from "./InputSearch.module.css";
import SearchBtn from "../SearchBtn/SearchBtn";
import { someClasses } from "../../utils/someClasses";

export const InputSearch = (props: React.HTMLProps<HTMLInputElement>) => {
  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <div className={classes.inputSearchBlock}>
      <input
        className={classes.inputSearch}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
      />
      <SearchBtn className={classes.inputSearchBtn} />
    </div>
  );
};

export default InputSearch;

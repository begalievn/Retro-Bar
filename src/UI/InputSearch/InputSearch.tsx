import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./InputSearch.module.css";
import SearchBtn from "../SearchBtn/SearchBtn";
import { someClasses } from "../../utils/someClasses";

export const InputSearch = (props: React.HTMLProps<HTMLInputElement>) => {
  const history = useNavigate();

  const handleClickInput = () => {
    switch (props.value) {
      case "фото":
        history("/photo");
        break;
      case "заведение":
        history("/institution");
        break;
      case "события":
        history("/events");
        break;
      case "новости":
        history("/news");
        break;
      case "контакты":
        history("/contacts");
        break;
      default: {
        history("/*");
      }
    }
  };
  return (
    <div className={classes.inputSearchBlock}>
      <input
        className={classes.inputSearch}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />

      <SearchBtn
        className={classes.inputSearchBtn}
        onClick={handleClickInput}
      />
    </div>
  );
};

export default InputSearch;

import React from "react";
import classes from "./SearchBtn.module.css";
import { ReactComponent as SearchIcon } from "../../assets/header/search.svg";

const SearchBtn = (props: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      className={[classes.searchBtn, props.className].join(" ")}
      onClick={props.onClick}
    >
      <SearchIcon width="15px" />
    </button>
  );
};

export default SearchBtn;

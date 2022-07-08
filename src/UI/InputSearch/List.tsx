import React, { useEffect } from "react";
import { navItems } from "../../layout/Header/Header";
import classes from "./InputSearch.module.css";

export interface S {
  input: string;
}
const List = ({ input }: S) => {
  const filteredData = navItems.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.title.toLowerCase().trim().includes(input);
      // ;
    }
  });

  return (
    <ul className={classes.container}>
      {filteredData.map((item, index) => (
        <li key={index} className={classes.title}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default List;

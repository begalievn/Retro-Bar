import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.photo__header}>
      <h3 className={classes.photo__header_title}>Актуальные фотоотчёты</h3>
      <img className={classes.photo__header_img} src={require('../../../../assets/icons/lightning.svg').default} alt="" />
    </div>
  );
}

export default Header;

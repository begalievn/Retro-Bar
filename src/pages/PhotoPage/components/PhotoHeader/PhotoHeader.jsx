import React from "react";
import classes from "./PhotoHeader.module.css";

function PhotoHeader() {
  return (
    <div className={classes.photo__header}>
      <h3 className={classes.photo__header_title}>Актуальные фотоотчёты</h3>
      <img className={classes.photo__header_img} src={require('../../../../assets/icons/lightning.svg').default} alt="" />
    </div>
  );
}

export default PhotoHeader;

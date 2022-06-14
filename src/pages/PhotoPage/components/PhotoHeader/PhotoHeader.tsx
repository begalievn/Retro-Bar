import React, { FC } from "react";
import classes from  "./PhotoHeader.module.css";
const PhotoHeader:FC = () => {
  return (
    <div className={classes.photo__header}>
      <h3 className={classes.photo__header_title}>Актуальные фотоотчёты</h3>
      <img className={classes.photo__header_img} src={('../../../../assets/icons/lightning.svg')} alt="" />
    </div>
  );
}

export default PhotoHeader;

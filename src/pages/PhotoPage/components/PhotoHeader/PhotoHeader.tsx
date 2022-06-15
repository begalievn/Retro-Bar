import React, { FC } from "react";
import classes from  "./PhotoHeader.module.css";
import PhotoNav from "../PhotoNav/PhotoNav";
const PhotoHeader:FC = () => {
  return (
    <div className={classes.photo__header}>
      <PhotoNav/>
    </div>
  );
}

export default PhotoHeader;

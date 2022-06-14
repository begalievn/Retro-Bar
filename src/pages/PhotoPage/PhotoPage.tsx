import React, { FC } from "react";
import PhotoHeader from "./components/PhotoHeader/PhotoHeader.jsx";
import PhotoMain from "./components/PhotoMain/PhotoMain";

import classes from "./PhotoPage.module.css";
const PhotoPage:FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.photo}>
        <PhotoHeader/>
        <PhotoMain/>
      </div>
    </div>
  );
};

export default PhotoPage;

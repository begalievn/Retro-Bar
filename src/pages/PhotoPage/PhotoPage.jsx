import React from "react";
import PhotoHeader from "./components/PhotoHeader/PhotoHeader";
import PhotoMain from "./components/PhotoMain/PhotoMain";

import classes from "./PhotoPage.module.css";
const PhotoPage = () => {
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

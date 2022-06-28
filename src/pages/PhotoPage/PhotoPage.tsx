import React, { FC } from "react";
import PhotoHeader from "./components/PhotoHeader/PhotoHeader";
import PhotoMain from "./components/PhotoMain/PhotoMain";
import classes from "./PhotoPage.module.css";
import CalendarIcon from "../../UI/CalendarIcon/CalendarIcon";
const PhotoPage: FC = () => {
  return (
    <>
      <div className={classes.photo}>
        <CalendarIcon />
        <div className={classes.container}>
          <PhotoHeader />
          <PhotoMain />
        </div>
      </div>
    </>
  );
};

export default PhotoPage;

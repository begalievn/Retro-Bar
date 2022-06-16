import React, { FC, useState } from "react";
import PhotoHeader from "./components/PhotoHeader/PhotoHeader";
import PhotoMain from "./components/PhotoMain/PhotoMain";
import classes from "./PhotoPage.module.css";
import calendarIcon from '../../assets/icons/calendar-icon.svg'
const PhotoPage: FC = () => {
  return (
    <>
      <div>
        <img className={classes.calendar_icon} src={calendarIcon} alt="" />
      </div>
      <div className={classes.container}>
        <div className={classes.photo}>
          <PhotoHeader />
          <PhotoMain />
        </div>
      </div>
    </>
  );
};

export default PhotoPage;

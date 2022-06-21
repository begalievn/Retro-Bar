import React, { FC } from "react";
import PhotoHeader from "./components/PhotoHeader/PhotoHeader";
import PhotoMain from "./components/PhotoMain/PhotoMain";
import classes from "./PhotoPage.module.css";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
const PhotoPage: FC = () => {
  return (
    <>
      <div className={classes.photo}>
        <img className={classes.calendar_icon} src={calendarIcon} alt="" />
        <div className={classes.container}>
          <PhotoHeader />
          <PhotoMain />
        </div>
      </div>
    </>
  );
};

export default PhotoPage;

import React, { FC, useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import PhotoHeader from "./components/PhotoHeader/PhotoHeader";
import PhotoMain from "./components/PhotoMain/PhotoMain";
import classes from "./PhotoPage.module.css";

const PhotoPage:FC = () => {
  const [selectedDate, setSelectedDay] = useState(new Date());
  return (
    <div className={classes.container}>
      <div className={classes.photo}>
        <PhotoHeader/>
        <PhotoMain/>
        {/* <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)}/> */}
      </div>
    </div>
  );
};

export default PhotoPage;

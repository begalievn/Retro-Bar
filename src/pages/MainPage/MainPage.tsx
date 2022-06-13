import React from 'react';
import calendarIcon from '../../assets/icons/calendar-icon.svg';
import PhotoReports from './components/photo-reports/PhotoReports';

import classes from './mainPage.module.css';

const MainPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.main__palaroid}>
        <div className={classes.palaroid_icon}>
          <img src={calendarIcon} alt="calendar-icon" />
        </div>
      </div>
      <PhotoReports />
    </div>
  );
};

export default MainPage;

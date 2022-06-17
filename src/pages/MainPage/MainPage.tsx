import React from 'react';
import calendarIcon from '../../assets/icons/calendar-icon.svg';
import MainNews from './components/news/MainNews';
import PalaroidSlider from './components/palaroid-slider/PalaroidSlider';
import PhotoReports from './components/photo-reports/PhotoReports';
import TopInstituions from './components/top-institutions/TopInstituions';

import classes from './mainPage.module.css';

const MainPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.main__palaroid}>
        <div className={classes.palaroid_icon}>
          <img src={calendarIcon} alt="calendar-icon" />
        </div>
      </div>
      <PalaroidSlider />
      <TopInstituions />
      <PhotoReports />
      <MainNews />
    </div>
  );
};

export default MainPage;

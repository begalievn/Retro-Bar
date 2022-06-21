import React from 'react';
import calendarIcon from '../../assets/icons/calendar-icon.svg';
import MainAd from './components/advertisement/MainAd';
import MainNews from './components/news/MainNews';
import PalaroidSlider from './components/palaroid-slider/PalaroidSlider';
import PhotoReports from './components/photo-reports/PhotoReports';
import TopInstituions from './components/top-institutions/TopInstituions';

import paperBackground from '../../assets/mainPage/paper-background.png';

import classes from './mainPage.module.css';

const MainPage = () => {
  return (
    <div className={classes.main}>
      {/* <div className={classes.main__palaroid}>
        <div className={classes.palaroid_icon}>
          <img src={calendarIcon} alt="calendar-icon" />
        </div>
      </div> */}
      <PalaroidSlider />
      <TopInstituions />
      <PhotoReports />
      <div className={classes.paper_container}>
        <div className={classes.paper_content}>
          <img src={paperBackground} />
          <div className={classes.news_container}>
            <MainNews />
          </div>
        </div>

        <MainAd />
      </div>
    </div>
  );
};

export default MainPage;

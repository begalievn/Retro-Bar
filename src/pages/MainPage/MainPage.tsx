import React from 'react';
import calendarIcon from '../../assets/icons/calendar-icon.svg';
import MainAd from './components/advertisement/MainAd';
import MainNews from './components/news/MainNews';
import PalaroidSlider from './components/palaroid-slider/PalaroidSlider';
import PhotoReports from './components/photo-reports/PhotoReports';
import TopInstituions from './components/top-institutions/TopInstituions';

import backgroundOne from '../../assets/mainPage/background-images/main-bg-one.png';

import paperBackground from '../../assets/mainPage/paper-background.png';

import classes from './mainPage.module.css';
import InstitutesSlider from '../../UI/InstitutesSlider/institutes-slider/InstitutesSlider';

const MainPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.top_div}></div>
      <div className={classes.main_one}>
        <PalaroidSlider />
        <TopInstituions />
      </div>
      <div className={classes.ellipse_deco_one}></div>
      <PhotoReports />
      <div>
        <InstitutesSlider />
      </div>
      <MainNews />
      <MainAd />
    </div>
  );
};

export default MainPage;

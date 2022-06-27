import React from 'react';
import calendarIcon from '../../assets/icons/calendar-icon.svg';
import MainAd from './components/advertisement/MainAd';
import MainNews from './components/news/MainNews';
import PalaroidSlider from './components/palaroid-slider/PalaroidSlider';
import PhotoReports from './components/photo-reports/PhotoReports';
import TopInstituions from './components/top-institutions/TopInstituions';

// imported images
import backgroundOne from '../../assets/mainPage/background-images/main-bg-one.png';
import paperBackground from '../../assets/mainPage/paper-background.png';
import bookImage from '../../assets/mainPage/mainAd-photo.png';

// imported components
import InstitutesSlider from '../../UI/InstitutesSlider/institutes-slider/InstitutesSlider';
import Book from '../../UI/Book/Book';

// imported types
import { BookProps } from '../../types/bookTypes/bookTypes';

import classes from './mainPage.module.css';

let bookProps: BookProps = {
  data: {
    text: 'Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.',
    title: 'Заказать сьёмку сейчас',
    image: bookImage,
  },
  page: 'main',
};

const MainPage = () => {
  console.log(window.innerWidth);
  return (
    <div className={classes.main}>
      <div className={classes.header_background_effect}></div>
      <div className={classes.main_one}>
        <PalaroidSlider />

        <TopInstituions />
      </div>

      <PhotoReports />

      <div className={classes.paper_background}>
        <InstitutesSlider />
        <MainNews />
        <div className={classes.paper_gradients_right}></div>
        <div className={classes.paper_gradient_left}></div>
      </div>

      <Book {...bookProps} />
    </div>
  );
};

export default MainPage;

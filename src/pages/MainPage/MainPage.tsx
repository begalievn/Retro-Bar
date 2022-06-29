import React, { useEffect } from 'react';

// imported images
import bookImage from '../../assets/mainPage/mainAd-photo.png';
import calendarIcon from '../../assets/icons/calendar-icon.svg';
import { sketch } from '../../assets/ui-images/images';

// imported functions from redux
import { gettingPhotos } from '../../store/features/photos/photosSlice';
import { gettingVideos } from '../../store/features/videos/videosSlice';

// imported components
import MainNews from './components/news/MainNews';
import PalaroidSlider from './components/palaroid-slider/PalaroidSlider';
import PhotoReports from './components/photo-reports/PhotoReports';
import TopInstituions from './components/top-institutions/TopInstituions';
import InstitutesSlider from '../../UI/InstitutesSlider/institutes-slider/InstitutesSlider';
import Book from '../../UI/Book/Book';

// imported types
import { BookProps } from '../../types/bookTypes/bookTypes';

import classes from './mainPage.module.css';
import BottomEmojis from '../../UI/BottomEmojis/BottomEmojis';
import CalendarIcon from '../../UI/CalendarIcon/CalendarIcon';
import { getPhotos } from '../../apis/getPhotos';
import { useAppDispatch } from '../../app/hooks';
import { getVideos } from '../../apis/getVideos';

let bookProps: BookProps = {
  data: {
    text: 'Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.',
    title: 'Заказать сьёмку сейчас',
    image: bookImage,
  },
  page: 'main',
};

const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getPhotos()
      .then((res) => {
        const photos = res.photos;
        console.log('photos', photos);
        dispatch(gettingPhotos(photos));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getVideos()
      .then((res) => {
        const photographers = res.photographers;
        console.log('get request on videos', photographers);
        dispatch(gettingVideos(photographers));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.header_background_effect}></div>
      <CalendarIcon />
      <div className={classes.main_one}>
        <PalaroidSlider />
        <TopInstituions />
      </div>

      <PhotoReports />

      <div className={classes.paper_background}>
        <div className={classes.slider_title_container}>
          <h2 className={classes.slider_title}>{'Заведения'}</h2>
          <img src={sketch} />
        </div>

        <InstitutesSlider isContentBlack={true} />
        <MainNews />
        <div className={classes.paper_gradient_top}></div>
        <div className={classes.paper_gradient_right}></div>
        <div className={classes.paper_gradient_left}></div>
      </div>

      <Book {...bookProps} />
      <BottomEmojis />
    </div>
  );
};

export default MainPage;

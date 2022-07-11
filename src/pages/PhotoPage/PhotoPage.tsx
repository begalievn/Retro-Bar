import React, { FC, useState } from 'react';
import PhotoHeader from './components/PhotoHeader/PhotoHeader';
import PhotoMain from './components/PhotoMain/PhotoMain';
import classes from './PhotoPage.module.css';
import CalendarIcon from '../../UI/CalendarIcon/CalendarIcon';
import { useAppSelector } from '../../app/hooks';
import { photoAPI } from '../../store/features/photos/photoQuery';
import BottomEmojis from '../../UI/BottomEmojis/BottomEmojis';
const PhotoPage: FC = () => {
  // const photos = useAppSelector((state) => state.photos.value);
  // const videos = useAppSelector((state) => state.videos.value);

  return (
    <>
      <div className={classes.photo}>
        <CalendarIcon />
        <div className={classes.container}>
          <PhotoHeader />
          <PhotoMain />
        </div>
        <BottomEmojis />
      </div>
    </>
  );
};

export default PhotoPage;

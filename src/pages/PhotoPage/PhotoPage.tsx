import React, { FC } from 'react';
import PhotoHeader from './components/PhotoHeader/PhotoHeader';
import PhotoMain from './components/PhotoMain/PhotoMain';
import classes from './PhotoPage.module.css';
import CalendarIcon from '../../UI/CalendarIcon/CalendarIcon';
import { useAppSelector } from '../../app/hooks';
const PhotoPage: FC = () => {
  const photos = useAppSelector((state) => state.photos.value);
  console.log('photos from store', photos);
  return (
    <>
      <div className={classes.photo}>
        <CalendarIcon />
        <div className={classes.container}>
          <PhotoHeader />
          <PhotoMain />
        </div>
      </div>
    </>
  );
};

export default PhotoPage;

import React from 'react';

import classes from './VideoPage.module.css';
import { Hero, MainVideo } from './components';
import Book from '../../UI/Book/Book';
import { BookProps } from '../../types/bookTypes/bookTypes';

const VideoPage = () => {
  return (
    <div className={classes.videos}>
      <Hero />
      <MainVideo />
    </div>
  );
};

export default VideoPage;

import React from "react";

import BottomEmojis from "../../UI/BottomEmojis/BottomEmojis";
import classes from './VideoPage.module.css';
import { Hero, MainVideo } from './components';
import Book from '../../UI/Book/Book';
import { BookProps } from '../../types/bookTypes/bookTypes';
import { advertisementsAPI } from '../../store/features/advertisement/advertisementsQuery';
import { getAdvertisementData } from '../../utils/helpers/getAdvertisementData';

const VideoPage = () => {
  const {
    data: advertisements,
    error: advertisementError,
    isLoading: advertisementIsLoading,
  } = advertisementsAPI.useFetchAllAdvertisementsQuery('');

  return (
    <div className={classes.videos}>
      {advertisementIsLoading ? (
        <p>Loading...</p>
      ) : (
        <Book
          page={'main'}
          data={getAdvertisementData(advertisements.advertisements)}
        />
      )}

      <MainVideo />
      <BottomEmojis />
    </div>
  );
};

export default VideoPage;

import React from 'react';

import classes from './topInstCard.module.css';
import backgroundPhoto from '../../../../../assets/mainPage/top-inst-card-bg.png';
import photoOfBar from '../../../../../assets/mainPage/top-inst-photo-of-bar.png';
import cardContentBackgroundPhoto from '../../../../../assets/mainPage/top-inst-card-content-bg.png';
import clockIcon from '../../../../../assets/mainPage/top-inst-clock-icon.svg';
import phoneIcon from '../../../../../assets/mainPage/top-inst-phone-icon.svg';
import locationIcon from '../../../../../assets/mainPage/top-inst-location-icon.svg';

const TopInstCard = () => {
  return (
    <div className={classes.card}>
      <img className={classes.cardBackground} src={backgroundPhoto} alt="" />
      <div className={classes.card_content_container}>
        <img
          className={classes.cardContentBackgroundPhoto}
          src={cardContentBackgroundPhoto}
          alt=""
        />
        <div className={classes.card_content}>
          <div className={classes.card_content_title}>
            <h4>MINIBAR</h4>
          </div>
          <div className={classes.card_content_info}>
            <p>
              <img src={clockIcon} alt="clock-icon" />
              {'18:00-06:00'}
            </p>
            <p>
              <img src={phoneIcon} alt="phone-icon" />
              {'0 558 55 00 00'}
            </p>
            <p>
              <img src={locationIcon} alt="location-icon" />
              {'Чынгыза Айтматова, 56'}
            </p>
          </div>
        </div>
      </div>
      <img className={classes.photoOfBar} src={photoOfBar} alt="bar" />
    </div>
  );
};

export default TopInstCard;

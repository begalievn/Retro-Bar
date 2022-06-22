import React from 'react';

import classes from './topInstCard.module.css';
import backgroundPhoto from '../../../../../assets/mainPage/top-inst-card-bg.png';
import photoOfBar from '../../../../../assets/mainPage/top-inst-photo-of-bar.png';
import cardContentBackgroundPhoto from '../../../../../assets/mainPage/top-inst-card-content-bg.png';
import clockIcon from '../../../../../assets/mainPage/top-inst-clock-icon.svg';
import phoneIcon from '../../../../../assets/mainPage/top-inst-phone-icon.svg';
import locationIcon from '../../../../../assets/mainPage/top-inst-location-icon.svg';

interface PropType {
  photo: string;
  title: string;
  time: string;
  phone: string;
  location: string;
  isActive: boolean;
}

const TopInstCard = ({
  photo,
  title,
  time,
  phone,
  location,
  isActive,
}: PropType) => {
  return (
    <div className={classes.card}>
      <img className={classes.cardBackground} src={backgroundPhoto} alt="" />
      {isActive ? (
        <>
          <div className={classes.card_content_container}>
            <img
              className={classes.cardContentBackgroundPhoto}
              src={cardContentBackgroundPhoto}
              alt=""
            />
            <div className={classes.card_content}>
              <div className={classes.card_content_title}>
                <h4>{title}</h4>
              </div>
              <div className={classes.card_content_info}>
                <p>
                  <img src={clockIcon} alt="clock-icon" />
                  {time}
                </p>
                <p>
                  <img src={phoneIcon} alt="phone-icon" />
                  {phone}
                </p>
                <p>
                  <img src={locationIcon} alt="location-icon" />
                  {location}
                </p>
              </div>
            </div>
          </div>
          <img className={classes.photoOfBar} src={photo} alt="bar" />
        </>
      ) : (
        <div className={classes.blackWhitePhoto}>
          <img src={photo} alt="photo" />
        </div>
      )}
    </div>
  );
};

export default TopInstCard;

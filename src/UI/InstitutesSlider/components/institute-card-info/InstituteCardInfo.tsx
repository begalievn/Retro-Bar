import React, { FC } from 'react';

// imported images
import logo from '../../../../assets/ui-images/inst-info-keanu-logo.svg';
import locationIcon from '../../../../assets/ui-images/inst-location-icon.svg';
import clockIcon from '../../../../assets/ui-images/inst-time-icon.svg';
import phoneIcon from '../../../../assets/ui-images/inst-phone-icon.svg';

import hotDishIcon from '../../../../assets/ui-images/inst-hot-dish-icon.svg';
import saladIcon from '../../../../assets/ui-images/inst-salad-icon.svg';
import dessertIcon from '../../../../assets/ui-images/inst-dessert-icon.svg';
import wineIcon from '../../../../assets/ui-images/inst-wine-icon.svg';
import starIcon from '../../../../assets/ui-images/inst-star-icon.svg';

// imported types
import { CardDataTypes } from '../../../../types/institutesSliderTypes/cardTypes';

import classes from './instituteCardInfo.module.css';

const InstituteCardInfo: FC<CardDataTypes> = ({
  photo,
  logo,
  title,
  instType,
  location,
  time,
  phone,
  hotDisPrice,
  saladPrice,
  dessertPrice,
  winePrice,
  stars,
  isActive,
}) => {
  return (
    <div className={classes.info}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} />
        </div>
        <div className={classes.title_container}>
          <h4>{title}</h4>
          <p>{instType}</p>
        </div>
      </div>
      <div className={classes.info_content}>
        <div>
          <img src={locationIcon} alt="locaiton icon" />
          <p>{location}</p>
        </div>
        <div>
          <img src={clockIcon} alt="clock icon" />
          <p>{time}</p>
        </div>
        <div>
          <img src={phoneIcon} alt="phone icon" />
          <p>{phone}</p>
        </div>
      </div>
      <div className={classes.prices}>
        <div>
          <p>
            <img src={hotDishIcon} alt="hot dish icon" />
            <span>~{hotDisPrice} с</span>
          </p>
          <p>
            <img src={saladIcon} alt="salad icon" />
            <span>~{saladPrice} с</span>
          </p>
        </div>
        <div>
          <p>
            <img src={dessertIcon} alt="dessert icon" />
            <span>~{dessertPrice} с</span>
          </p>
          <p>
            <img src={wineIcon} alt="wine icon" />
            <span>~{winePrice} с</span>
          </p>
        </div>
      </div>
      <div className={classes.stars}>
        <div className={classes.stars_container}>
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
        </div>
        <p>{stars}</p>
      </div>
    </div>
  );
};

export default InstituteCardInfo;

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
import { InstitudeCardDataTypes } from '../../../../types/institutesSliderTypes/cardTypes';

import classes from './instituteCardInfo.module.css';

const InstituteCardInfo: FC<InstitudeCardDataTypes> = ({
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
  isContentBlack,
}) => {
  return (
    <div
      style={{ color: isContentBlack ? 'black' : 'white' }}
      className={classes.info}
    >
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
          <img src={locationIcon} alt="location icon"  />
          <p>{location}</p>
        </div>
        <div>
           <img src={clockIcon} alt="clock icon" style={isContentBlack ? {} : {filter: 'brightness(0) invert(1)'}} />

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
            <img src={hotDishIcon}  alt={'icon'} style={isContentBlack ? {} : {filter: 'brightness(0) invert(1)'}} />


            <span>~{hotDisPrice} с</span>
          </p>
          <p>
            <img src={saladIcon} alt={'icon'} style={isContentBlack ? {} : {filter: 'brightness(0) invert(1)'}} />


            <span>~{saladPrice} c</span>
          </p>
        </div>
        <div>
          <p>
            <img src={dessertIcon} alt={"icon"} style={isContentBlack ? {} : {filter: 'brightness(0) invert(1)'}} />

            <span>~{dessertPrice} с</span>
          </p>
          <p className={classes.prices_wine}>
            <img src={wineIcon} alt={'icon'} style={isContentBlack ? {} : {filter: 'brightness(0) invert(1)'}} />

            <span>~{winePrice} c</span>
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

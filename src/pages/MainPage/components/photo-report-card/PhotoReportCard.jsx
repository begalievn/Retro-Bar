import React from 'react';
import cardBackground1 from '../../../../assets/mainPage/photo-report-card-bg1.png';
import cardBackground2 from '../../../../assets/mainPage/photo-report-card-bg2.png';
import cardBackground3 from '../../../../assets/mainPage/photo-report-card-bg3.png';
import cardBackground4 from '../../../../assets/mainPage/photo-report-card-bg4.png';

import classes from './photoReportCard.module.css';
import { getRandomItem } from '../../../../utils/getRandomItem';

const cardBackgroundImages = [
  cardBackground1,
  cardBackground2,
  cardBackground3,
  cardBackground4,
];

console.log(getRandomItem(cardBackgroundImages));

const PhotoReportCard = ({ photo, title }) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.photoCard}>
        <img src={photo} alt="report" />
        <div className={classes.cardContent_container}>
          <div className={classes.cardContent}>
            <h4>{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoReportCard;

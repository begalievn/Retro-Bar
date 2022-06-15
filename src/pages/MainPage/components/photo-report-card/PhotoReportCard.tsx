import React from 'react';
import cardBackground1 from '../../../../assets/mainPage/photo-report-card-bg1.png';
import cardBackground2 from '../../../../assets/mainPage/photo-report-card-bg2.png';
import cardBackground3 from '../../../../assets/mainPage/photo-report-card-bg3.png';
import cardBackground4 from '../../../../assets/mainPage/photo-report-card-bg4.png';
import eyeIcon from '../../../../assets/mainPage/eye-icon.svg';
import picIcon from '../../../../assets/mainPage/pic-icon.svg';

import classes from './photoReportCard.module.css';
import { getRandomItem } from '../../../../utils/getRandomItem';

const cardBackgroundImages = [
  cardBackground1,
  cardBackground2,
  cardBackground3,
  cardBackground4,
];

type Props = {
  photo?: string;
  title: string;
  eventType: string;
  watches: number;
  pics: number;
  date: string;
};

const PhotoReportCard = ({
  photo,
  title,
  eventType,
  watches,
  pics,
  date,
}: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${getRandomItem(cardBackgroundImages)})` }}
      className={classes.cardContainer}
    >
      <div className={classes.photoCard}>
        <img src={photo} alt="report" />
        <div className={classes.cardContent_container}>
          <div className={classes.cardContent}>
            <h4>{title}</h4>
            <p>{eventType}</p>
            <div className={classes.cardContent_info}>
              <div className={classes.cardContent_info__left}>
                <div className={classes.cardContent_info__watches}>
                  <img src={eyeIcon} alt="watches icon" />
                  <span>{watches}</span>
                </div>
                <div className={classes.cardContent_info__pics}>
                  <img src={picIcon} alt="pic icon" />
                  <span>{pics}</span>
                </div>
              </div>
              <div className={classes.cardContent_info__right}>
                <p>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoReportCard;

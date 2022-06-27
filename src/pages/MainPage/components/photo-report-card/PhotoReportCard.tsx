import React from 'react';

import eyeIcon from '../../../../assets/mainPage/eye-icon.svg';
import picIcon from '../../../../assets/mainPage/pic-icon.svg';

import classes from './photoReportCard.module.css';
import { getRandomItem } from '../../../../utils/getRandomItem';
import { url } from 'inspector';

type Props = {
  photo?: string;
  title: string;
  eventType: string;
  watches: number;
  pics: number;
  date: string;
  backgroundPhoto: string;
};

const PhotoReportCard = ({
  photo,
  title,
  eventType,
  watches,
  pics,
  date,
  backgroundPhoto,
}: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundPhoto})` }}
      className={classes.cardContainer}
    >
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className={classes.photoCard}
      >
        <img src={photo} />
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

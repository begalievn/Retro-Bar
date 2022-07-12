import React from 'react';

import eyeIcon from '../../../../assets/mainPage/eye-icon.svg';
import picIcon from '../../../../assets/mainPage/pic-icon.svg';

import classes from './photoReportCard.module.css';

type Props = {
  photo?: string;
  title: string;
  eventName: string;
  views: number;
  pics: number;
  date: string;
  backgroundPhoto: string;
};

const PhotoReportCardBig = ({
  photo,
  title,
  eventName,
  views,
  pics,
  date,
  backgroundPhoto,
}: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundPhoto})`, width: '668px' }}
      className={classes.cardContainer}
    >
      <div
        className={classes.photoCard}
        style={{
          width: '99%',
          backgroundImage: `url(${photo})`,
        }}
      >
        <img src={photo} />
        <div className={classes.cardContent_container}>
          <div className={classes.cardContent}>
            <h4>{title}</h4>
            <p>{eventName}</p>
            <div className={classes.cardContent_info}>
              <div className={classes.cardContent_info__left}>
                <div className={classes.cardContent_info__watches}>
                  <img src={eyeIcon} alt="watches icon" />
                  <span>{views}</span>
                </div>
                <div className={classes.cardContent_info__pics}>
                  <img src={picIcon} alt="pic icon" />
                  <span>{pics}</span>
                </div>
              </div>
              <div className={classes.cardContent_info__right}>
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoReportCardBig;

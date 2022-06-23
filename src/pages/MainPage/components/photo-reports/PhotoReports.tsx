import React from 'react';

import star3Icon from '../../../../assets/mainPage/star-3.svg';
import star4Icon from '../../../../assets/mainPage/star-4.svg';
import smileIcon from '../../../../assets/mainPage/smile-icon.svg';
import PhotoReportCard from '../photo-report-card/PhotoReportCard';
import photo1 from '../../../../assets/mainPage/photo-report-card-photo.png';
import photo2 from '../../../../assets/mainPage/p-r-c-p2.png';
import photo3 from '../../../../assets/mainPage/p-r-c-p3.png';
import photo4 from '../../../../assets/mainPage/p-r-c-p4.png';
import bigPhoto from '../../../../assets/mainPage/p-r-c-p-b.png';
import greenTape from '../../../../assets/mainPage/p-r-green-tape.png';

import cardBackground1 from '../../../../assets/mainPage/photo-report-card-bg1.png';
import cardBackground2 from '../../../../assets/mainPage/photo-report-card-bg2.png';
import cardBackground3 from '../../../../assets/mainPage/photo-report-card-bg3.png';
import cardBackground4 from '../../../../assets/mainPage/photo-report-card-bg4.png';
import photoBackground from '../../../../assets/mainPage/photo-report-card-big-bg.png';

import classes from '../../mainPage.module.css';
import PhotoReportCardBig from '../photo-report-card/PhotoReportCardBig';

// const photos: Array<HTMLImageElement> = [photo1, photo2, photo3, photo4];

const reportsArr = [
  {
    photo: photo1,
    title: 'ZEPPELIN BAR',
    eventType: 'STREET CREDIBILITY',
    watches: 709,
    pics: 144,
    date: '20 мая 2022',
    backgroundPhoto: cardBackground1,
  },
  {
    photo: photo2,
    title: 'MUNCHEN PUB',
    eventType: 'LIVE MUSIC',
    watches: 660,
    pics: 50,
    date: '20 мая 2022',
    backgroundPhoto: cardBackground2,
  },
  {
    photo: photo3,
    title: 'KIPISH BAR',
    eventType: 'Birthday Party',
    watches: 660,
    pics: 50,
    date: '20 мая 2022',
    backgroundPhoto: cardBackground3,
  },
  {
    photo: photo4,
    title: 'SUZIE WONG ',
    eventType: 'DJ FREAY | MC SPACE',
    watches: 640,
    pics: 84,
    date: '20 мая 2022',
    backgroundPhoto: cardBackground4,
  },
];

const bigPhotoCard = {
  photo: bigPhoto,
  title: 'PARK EVENTPLACE',
  eventType: 'ÜN',
  watches: 6545,
  pics: 122,
  date: '14 мая 2022',
  backgroundPhoto: photoBackground,
};

const PhotoReports = () => {
  return (
    <div className={classes.photo_reports}>
      <div className={classes.photo_reports_container}>
        <div
          className={[classes.main_title, classes.photo_reports__title].join(
            ' '
          )}
        >
          Актуальные фотоотчеты
        </div>
        <div className={classes.green_tape}>
          <img src={greenTape} />
        </div>
        <div className={classes.photo_reports__content}>
          {reportsArr.map((item, index) => (
            <div key={index}>
              <PhotoReportCard
                key={index}
                photo={item.photo}
                title={item.title}
                eventType={item.eventType}
                watches={item.watches}
                pics={item.pics}
                date={item.date}
                backgroundPhoto={item.backgroundPhoto}
              />
            </div>
          ))}
          <div>
            <PhotoReportCardBig
              photo={bigPhotoCard.photo}
              title={bigPhotoCard.title}
              eventType={bigPhotoCard.eventType}
              watches={bigPhotoCard.watches}
              pics={bigPhotoCard.pics}
              date={bigPhotoCard.date}
              backgroundPhoto={bigPhotoCard.backgroundPhoto}
            />
          </div>
        </div>
        <div className={classes.photo_reports__btn}>
          <button>Все фото</button>
        </div>
      </div>

      <img className={classes.photo_reports__star3} src={star3Icon} alt="" />
      <img className={classes.photo_reports__star4} src={star4Icon} alt="" />
      <img
        className={classes.photo_reports__smileIcon}
        src={smileIcon}
        alt=""
      />
    </div>
  );
};

export default PhotoReports;

// imported libraries
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// imported images
import star3Icon from '../../../../assets/mainPage/star-3.svg';
import star4Icon from '../../../../assets/mainPage/star-4.svg';
import smileIcon from '../../../../assets/mainPage/smile-icon.svg';
import PhotoReportCard from '../photo-report-card/PhotoReportCard';
import greenTape from '../../../../assets/mainPage/p-r-green-tape.png';

import cardBackground1 from '../../../../assets/mainPage/photo-report-card-bg1.png';
import cardBackground2 from '../../../../assets/mainPage/photo-report-card-bg2.png';
import cardBackground3 from '../../../../assets/mainPage/photo-report-card-bg3.png';
import cardBackground4 from '../../../../assets/mainPage/photo-report-card-bg4.png';
import photoBackground from '../../../../assets/mainPage/photo-report-card-big-bg.png';

import classes from '../../mainPage.module.css';
import PhotoReportCardBig from '../photo-report-card/PhotoReportCardBig';
import { photoAPI } from '../../../../store/features/photos/photoQuery';
import { CardTravelSharp } from '@mui/icons-material';
import { IPhotoCards } from '../../../../types/apiTypes/photo';

const backgroungPhotos = [
  cardBackground1,
  cardBackground2,
  cardBackground3,
  cardBackground4,
  photoBackground,
];

const PhotoReports = () => {
  const { data: photos, error, isLoading } = photoAPI.useFetchAllPhotosQuery(5);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/photo');
  };
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
          {isLoading
            ? null
            : photos.photoCards.map((card: IPhotoCards, index: number) => (
                <div key={index}>
                  {index === 4 ? (
                    <PhotoReportCardBig
                      photo={card?.photos[0].url}
                      title={card.establishment.name}
                      eventName={card.eventName}
                      pics={card.photos.length}
                      views={card.views}
                      date={card.date}
                      backgroundPhoto={backgroungPhotos[index]}
                    />
                  ) : (
                    <PhotoReportCard
                      photo={card?.photos[0].url}
                      title={card.establishment.name}
                      eventName={card.eventName}
                      pics={card.photos.length}
                      views={card.views}
                      date={card.date}
                      backgroundPhoto={backgroungPhotos[index]}
                    />
                  )}
                </div>

                // photo: card?.photos[0],
                // title: card.establishment.name,
                // eventName: card.eventName,
                // pics: card.photos.length,
                // views: card.views,
                // date: card.created,
                // backgroungPhoto: backgroungPhotos[index],
              ))}
          {/* {reportsArr.map((item, index) => (
            <div className={classes.photo_report_card_container} key={index}>
              <PhotoReportCard
                key={index}
                photo={item.photo}
                title={item.title}
                eventName={item.eventType}
                views={item.watches}
                pics={item.pics}
                date={item.date}
                backgroundPhoto={item.backgroundPhoto}
              />
            </div>
          ))} */}
          {/* <div>
            <PhotoReportCardBig
              photo={bigPhotoCard.photo}
              title={bigPhotoCard.title}
              eventType={bigPhotoCard.eventType}
              watches={bigPhotoCard.watches}
              pics={bigPhotoCard.pics}
              date={bigPhotoCard.date}
              backgroundPhoto={bigPhotoCard.backgroundPhoto}
            />
          </div> */}
        </div>
        <div className={classes.photo_reports__btn}>
          <button onClick={clickHandler}>Все фото</button>
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

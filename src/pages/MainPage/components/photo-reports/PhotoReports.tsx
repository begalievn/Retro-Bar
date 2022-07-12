// imported libraries
import React, { FC, useEffect, useState } from 'react';
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
import { IPhoto, IPhotoCards } from '../../../../types/apiTypes/photo';
import { IPhotosAnother } from '../../../PhotoPage/components/PhotoMain/interfaces';
import NewGallery from '../../../../UI/NewGallery/NewGallery';

const backgroungPhotos = [
  cardBackground1,
  cardBackground2,
  cardBackground3,
  cardBackground4,
  photoBackground,
];

interface CurrentEventProps {
  photos: IPhoto[];
  establishment: string;
  event: string;
}

const PhotoReports: FC = () => {
  const { data: photos, error, isLoading } = photoAPI.useFetchAllPhotosQuery(5);
  const [galleryModal, setGalleryModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<CurrentEventProps | null>(
    null
  );
  const toggleGalleryModal = () => setGalleryModal(!galleryModal);

  const navigate = useNavigate();

  if (galleryModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  const onClickEvent = (item: IPhotosAnother) => {
    if (item.link === '' || item.ad) return false;
    const data = {
      photos: item.photos!,
      establishment: item.name!,
      event: item.eventName!,
    };
    console.log('clicked');

    setCurrentEvent(data);
    toggleGalleryModal();
  };

  const clickHandler = (): void => {
    navigate('/photo');
  };
  return (
    <>
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
                  <div
                    key={index}
                    onClick={() => onClickEvent(card)}
                    className={classes.photo_card}
                  >
                    {index === 4 ? (
                      <PhotoReportCardBig
                        photo={card?.photos[0]?.url}
                        title={card.establishment.name}
                        eventName={card.eventName}
                        pics={card.photos.length}
                        views={card.views}
                        date={card.date}
                        backgroundPhoto={backgroungPhotos[index]}
                      />
                    ) : (
                      <PhotoReportCard
                        photo={card?.photos[0]?.url}
                        title={card.establishment.name}
                        eventName={card.eventName}
                        pics={card.photos.length}
                        views={card.views}
                        date={card.date}
                        backgroundPhoto={backgroungPhotos[index]}
                      />
                    )}
                  </div>
                ))}
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
      {galleryModal && currentEvent && (
        <NewGallery eventInfo={currentEvent!} close={toggleGalleryModal} />
      )}
    </>
  );
};

export default PhotoReports;

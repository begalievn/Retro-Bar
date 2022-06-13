import React from 'react';

import star3Icon from '../../../../assets/mainPage/star-3.svg';
import star4Icon from '../../../../assets/mainPage/star-4.svg';
import smileIcon from '../../../../assets/mainPage/smile-icon.svg';
import PhotoReportCard from '../photo-report-card/PhotoReportCard';
import photo1 from '../../../../assets/mainPage/photo-report-card-photo.png';
import photo2 from '../../../../assets/mainPage/p-r-c-p2.png';
import photo3 from '../../../../assets/mainPage/p-r-c-p3.png';
import photo4 from '../../../../assets/mainPage/p-r-c-p4.png';

import classes from '../../mainPage.module.css';

const photos: Array<HTMLImageElement> = [photo1, photo2, photo3, photo4];

const PhotoReports = () => {
  return (
    <div className={classes.photo_reports}>
      <div className={classes.photo_reports_layer}>
        <div className={classes.photo_reports_container}>
          <div
            className={[classes.main_title, classes.photo_reports__title].join(
              ' '
            )}
          >
            Актуальные фотоотчеты
          </div>
          <div className={classes.photo_reports__content}>
            {photos.map((item, index) => (
              <PhotoReportCard key={index} photo={item} />
            ))}
          </div>
          <div className={classes.photo_reports__btn}>
            <button>Все фото</button>
          </div>
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

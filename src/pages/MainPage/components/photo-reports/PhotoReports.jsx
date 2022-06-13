import React from 'react';

import star3Icon from '../../../../assets/mainPage/star-3.svg';
import star4Icon from '../../../../assets/mainPage/star-4.svg';
import smileIcon from '../../../../assets/mainPage/smile-icon.svg';

import classes from '../../mainPage.module.css';

const PhotoReports = () => {
  return (
    <div className={classes.photo_reports}>
      <div className={classes.photo_reports_layer}>
        <div className={classes.photo_reports_container}>
          <div className={classes.main_title}>Актуальные фотоотчеты</div>
          <div className={classes.photo_reports__content}></div>
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

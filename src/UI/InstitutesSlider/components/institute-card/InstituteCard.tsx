import React from 'react';

import photo from '../../../../assets/ui-images/inst-slider-photo-active.png';

import classes from './instituteCard.module.css';

const InstituteCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.image_container}>
        <div className={classes.image_div}>
          <img src={photo} alt="ints photo" />
        </div>
      </div>
      <div className={classes.content_container}></div>
    </div>
  );
};

export default InstituteCard;

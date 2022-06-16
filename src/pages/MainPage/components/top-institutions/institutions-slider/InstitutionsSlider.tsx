import React from 'react';
import TopInstCard from '../top-inst-card/TopInstCard';

import leftBackground from '../../../../../assets/mainPage/top-inst-left-bg.png';
import rightBackground from '../../../../../assets/mainPage/top-inst-right-bg.png';

import classes from './instSlider.module.css';

const InstitutionsSlider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <div className={classes.left}>
          <img src={leftBackground} alt="" />
          <div></div>
        </div>
        <div className={classes.active}>
          <TopInstCard />
        </div>
        <div className={classes.right}>
          <img src={rightBackground} alt="right img" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default InstitutionsSlider;

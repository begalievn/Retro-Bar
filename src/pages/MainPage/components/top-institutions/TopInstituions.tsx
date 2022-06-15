import React from 'react';
import InstitutionsSlider from './institutions-slider/InstitutionsSlider';

import classes from '../../mainPage.module.css';

const TopInstituions = () => {
  return (
    <div className={classes.institutions_container}>
      <h2
        className={[classes.main_title, classes.institutions_title].join(' ')}
      >
        Топ заведений
      </h2>
      <div className={classes.institutions_slider}>
        <InstitutionsSlider />
      </div>
    </div>
  );
};

export default TopInstituions;

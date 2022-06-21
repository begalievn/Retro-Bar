import React from 'react';
import InstituteCard from '../components/institute-card/InstituteCard';

import classes from './institutesSlider.module.css';

const InstitutesSlider = () => {
  return (
    <div className={classes.slider}>
      <h2 className={classes.slider_title}>{'Заведения'}</h2>
      <InstituteCard />
    </div>
  );
};

export default InstitutesSlider;

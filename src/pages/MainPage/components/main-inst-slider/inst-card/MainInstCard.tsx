import React, { FC } from 'react';

import classes from './mainInstCard.module.css';

const MainInstCard: FC = () => {
  return (
    <div className={classes.card}>
      <div className={classes.card_image_container}>
        <div className={classes.card_image_div}>
          <img />
        </div>
      </div>
      <div className={classes.card_content_container}></div>
    </div>
  );
};

export default MainInstCard;

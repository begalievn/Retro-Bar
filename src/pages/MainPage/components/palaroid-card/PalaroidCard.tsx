import React from 'react';

import cardImage from '../../../../assets/mainPage/palaroid-card-image-active.png';

import classes from './palaroid-card.module.css';

type Prop = {
  image: string;
  title: string;
  description: string;
  date: string;
};

const PalaroidCard = ({ image, title, description, date }: Prop) => {
  return (
    <div className={classes.palaroidCard}>
      <div className={classes.card_image}>
        <img src={image} alt="card image" />
      </div>
      <div className={classes.card_content}>
        <div className={classes.card_content_left}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className={classes.card_content_right}>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PalaroidCard;

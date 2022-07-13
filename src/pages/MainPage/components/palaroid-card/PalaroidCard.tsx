import React from 'react';

import { IPhoto } from '../../../../types/apiTypes/photo';

import classes from './palaroid-card.module.css';

type Prop = {
  image?: IPhoto;
  title: string;
  description: string;
  date: string;
  isActive: boolean;
};

const PalaroidCard = ({
  image,
  title = '',
  description = '',
  date = '',
  isActive = false,
}: Prop) => {
  return (
    <div className={classes.palaroidCard}>
      <div className={classes.card_image}>
        <img
          style={isActive ? {} : { filter: 'grayscale(100%)' }}
          src={image?.url}
          alt="card image"
        />
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

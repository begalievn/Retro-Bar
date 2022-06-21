import React from 'react';

import classes from './swiperItem.module.css';
import { SwiperItemType } from '../types';

export type Props = SwiperItemType;

const SwiperItem = ({ imageSrc, imageAlt }: Props) => {
  return (
    <li className={classes.swiper_item}>
      <img src={imageSrc} alt={imageAlt} className={classes.swiper_img} />
    </li>
  );
};

export default SwiperItem;

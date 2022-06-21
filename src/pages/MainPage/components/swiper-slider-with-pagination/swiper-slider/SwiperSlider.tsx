import React from 'react';
import SwiperItem from '../swiper-item/SwiperItem';
import { SwiperItemType } from '../types';

import classes from './swiperSlider.module.css';

import img1 from '../../../../assets/mainPage/p-r-c-p2.png';
import img2 from '../../../../assets/mainPage/p-r-c-p3.png';
import img3 from '../../../../assets/mainPage/p-r-c-p4.png';

const items = [
  { imageSrc: img1, imageAlt: 'first' },
  { imageSrc: img2, imageAlt: 'second' },
  { imageSrc: img3, imageAlt: 'third' },
]; 

const SwiperSlider = () => {
  return (
    <div className={classes.swiper_container}>
      <ul className={classes.swiper_list}>
        {items.map((item, index) => (
          <SwiperItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default SwiperSlider;

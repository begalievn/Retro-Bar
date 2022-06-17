import React, { useState, useEffect } from 'react';
import TopInstCard from '../top-inst-card/TopInstCard';

import leftBackground from '../../../../../assets/mainPage/top-inst-left-bg.png';
import rightBackground from '../../../../../assets/mainPage/top-inst-right-bg.png';
import leftPhoto from '../../../../../assets/mainPage/top-inst-left-photo.png';
import rightPhoto from '../../../../../assets/mainPage/top-inst-right-photo.png';
import photoOfBar from '../../../../../assets/mainPage/top-inst-photo-of-bar.png';

import classes from './instSlider.module.css';

interface CardsType {
  photo: string;
  title: string;
  time: string;
  phone: string;
  location: string;
}

const cardsData: Array<CardsType> = [
  {
    photo: photoOfBar,
    title: 'MINIBAR',
    time: '18:00-06:00',
    phone: '0 558 55 00 00',
    location: 'Чынгыза Айтматова, 56',
  },
  {
    photo: photoOfBar,
    title: 'MINIBAR',
    time: '18:00-06:00',
    phone: '0 558 55 00 00',
    location: 'Чынгыза Айтматова, 56',
  },
  {
    photo: photoOfBar,
    title: 'MINIBAR',
    time: '18:00-06:00',
    phone: '0 558 55 00 00',
    location: 'Чынгыза Айтматова, 56',
  },
  {
    photo: photoOfBar,
    title: 'MINIBAR',
    time: '18:00-06:00',
    phone: '0 558 55 00 00',
    location: 'Чынгыза Айтматова, 56',
  },
  {
    photo: photoOfBar,
    title: 'MINIBAR',
    time: '18:00-06:00',
    phone: '0 558 55 00 00',
    location: 'Чынгыза Айтматова, 56',
  },
];

const InstitutionsSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideCards, setSlideCards] = useState<CardsType[]>([]);

  useEffect(() => {
    let cardsArr = [];

    if (cardsData === undefined) {
      return;
    }

    Array.isArray(cardsData) ? (cardsArr = [...cardsData]) : cardsArr;
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <div className={[classes.hiddenLeft, classes.card].join(' ')}>
          <TopInstCard />
        </div>
        <div className={[classes.left, classes.card].join(' ')}>
          <TopInstCard />
        </div>
        <div className={[classes.active, classes.card].join(' ')}>
          <TopInstCard />
        </div>
        <div className={[classes.right, classes.card].join(' ')}>
          <TopInstCard />
        </div>
        <div className={[classes.hiddenRight, classes.card].join(' ')}>
          <TopInstCard />
        </div>
      </div>
    </div>
  );
};

export default InstitutionsSlider;

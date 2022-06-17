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
    let cardsArr: CardsType[] = [];

    if (cardsData === undefined) {
      return;
    }

    Array.isArray(cardsData)
      ? (cardsArr = [...cardsData])
      : (cardsArr = [cardsData]);

    let i = 0;
    while (cardsArr.length < 6) {
      cardsArr.push(cardsArr[i]);
      i++;
    }

    setSlideCards([...cardsArr]);
  }, []);

  let leftIndex = activeIndex ? activeIndex - 1 : slideCards.length - 1;
  let rightIndex = activeIndex === slideCards.length - 1 ? 0 : activeIndex + 1;

  let hiddenLeftIndex = leftIndex ? leftIndex - 1 : slideCards.length - 1;
  let hiddenRightIndex =
    rightIndex === slideCards.length - 1 ? 0 : rightIndex + 1;

  function prev() {
    setActiveIndex(activeIndex ? activeIndex - 1 : slideCards.length - 1);
  }

  function next() {
    setActiveIndex(activeIndex === slideCards.length - 1 ? 0 : activeIndex + 1);
  }

  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <div
          key={hiddenLeftIndex}
          className={[classes.hiddenLeft, classes.card].join(' ')}
        >
          <TopInstCard {...slideCards[hiddenLeftIndex]} />
        </div>
        <div
          key={leftIndex}
          className={[classes.left, classes.card].join(' ')}
          onClick={prev}
        >
          <TopInstCard {...slideCards[leftIndex]} />
        </div>
        <div
          key={activeIndex}
          className={[classes.active, classes.card].join(' ')}
        >
          <TopInstCard {...slideCards[activeIndex]} />
        </div>
        <div
          key={rightIndex}
          className={[classes.right, classes.card].join(' ')}
          onClick={next}
        >
          <TopInstCard {...slideCards[rightIndex]} />
        </div>
        <div
          key={hiddenRightIndex}
          className={[classes.hiddenRight, classes.card].join(' ')}
        >
          <TopInstCard {...slideCards[hiddenRightIndex]} />
        </div>
      </div>
    </div>
  );
};

export default InstitutionsSlider;

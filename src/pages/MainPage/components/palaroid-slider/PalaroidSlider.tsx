import React, { FC, useState, useEffect, ReactNode } from 'react';
import PalaroidCard from '../palaroid-card/PalaroidCard';

import activeCardImage from '../../../../assets/mainPage/palaroid-card-image-active.png';
import rightCardImage from '../../../../assets/mainPage/palaroid-card-image-right.png';
import rightMostCardImage from '../../../../assets/mainPage/palaroid-card-image-rightmost.png';
import leftCardImage from '../../../../assets/mainPage/palaroid-card-image-left.png';

import classes from './palaroidSlider.module.css';

interface CardsType {
  image: string;
  title: string;
  description: string;
  date: string;
}

const cards: Array<CardsType> = [
  {
    image: activeCardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: rightCardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: rightMostCardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: rightCardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: rightCardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: rightCardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: leftCardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
];

const PalaroidSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderCards, setSliderCards] = useState<CardsType[]>([]);

  useEffect(() => {
    let arrCards: Array<CardsType> = [];

    if (cards === undefined) return;

    Array.isArray(cards) ? (arrCards = [...cards]) : (arrCards = [cards]);

    // Here I add additional cards if there isn't necessary value
    let i = 0;
    while (arrCards.length < 7) {
      arrCards.push(arrCards[i]);
      i++;
    }

    setSliderCards([...arrCards]);
  }, [cards]);

  let leftIndex = activeIndex ? activeIndex - 1 : sliderCards.length - 1;
  let rightIndex = activeIndex === sliderCards.length - 1 ? 0 : activeIndex + 1;
  let rightmostIndex =
    rightIndex === sliderCards.length - 1 ? 0 : rightIndex + 1;

  let hiddenLeftIndex = leftIndex ? leftIndex - 1 : sliderCards.length - 1;
  let hiddenRightIndex =
    rightmostIndex === sliderCards.length - 1 ? 0 : rightmostIndex + 1;

  function prev() {
    setActiveIndex(activeIndex ? activeIndex - 1 : sliderCards.length - 1);
  }

  function next() {
    setActiveIndex(
      activeIndex === sliderCards.length - 1 ? 0 : activeIndex + 1
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <div
          key={hiddenLeftIndex}
          className={[classes.hiddenleft, classes.card].join(' ')}
        >
          <PalaroidCard isActive={false} {...sliderCards[hiddenLeftIndex]} />
        </div>
        <div
          key={leftIndex}
          className={[classes.left, classes.card].join(' ')}
          onClick={prev}
        >
          <PalaroidCard
            image={sliderCards[leftIndex]?.image}
            title={''}
            description={''}
            date={''}
            isActive={false}
          />
        </div>
        <div
          key={activeIndex}
          className={[classes.active, classes.card].join(' ')}
        >
          <PalaroidCard isActive={true} {...sliderCards[activeIndex]} />
        </div>
        <div
          key={rightIndex}
          className={[classes.right, classes.card].join(' ')}
          onClick={next}
        >
          <PalaroidCard
            image={sliderCards[rightIndex]?.image}
            title={''}
            description={''}
            date={''}
            isActive={false}
          />
        </div>
        <div
          key={rightmostIndex}
          className={[classes.rightmost, classes.card].join(' ')}
          onClick={next}
        >
          <PalaroidCard
            image={sliderCards[rightmostIndex]?.image}
            title={''}
            description={''}
            date={''}
            isActive={false}
          />
        </div>
        <div
          key={hiddenRightIndex}
          className={[classes.hiddenright, classes.card].join(' ')}
        >
          <PalaroidCard isActive={false} {...sliderCards[hiddenRightIndex]} />
        </div>
      </div>
    </div>
  );
};

export default PalaroidSlider;

import React, { FC, useState, useEffect, ReactNode } from 'react';
import PalaroidCard from '../palaroid-card/PalaroidCard';

import cardImage from '../../../../assets/mainPage/palaroid-card-image-active.png';

import classes from './palaroidSlider.module.css';

// interface CardsType {
//   image: string;
//   title: string;
//   description: string;
//   date: string;
// }

const cards = [
  {
    image: cardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: cardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: cardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: cardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: cardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: cardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
  {
    image: cardImage,
    title: 'ZEPPELIN BAR',
    description: 'STREED CREDIBILITY',
    date: 'Суббота 14 мая',
  },
];

const PalaroidSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderCards, setSliderCards] = useState([]);

  useEffect(() => {
    let arrCards = [];

    if (cards === undefined) return;

    Array.isArray(cards) ? (arrCards = [...cards]) : (arrCards = [cards]);

    // Here I add additional cards if there isn't necessary value
    let i = 0;
    while (arrCards.length < 7) {
      arrCards.push(arrCards[i]);
      i++;
    }

    // const componentsArr = arrCards.map((item) => (
    //   <PalaroidCard
    //     image={item.image}
    //     title={item.title}
    //     description={item.description}
    //     date={item.date}
    //   />
    // ));
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
    console.log(activeIndex);
  }

  function next() {
    setActiveIndex(
      activeIndex === sliderCards.length - 1 ? 0 : activeIndex + 1
    );
    console.log(activeIndex);
  }

  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <div
          key={hiddenLeftIndex}
          className={[classes.hiddenleft, classes.card].join(' ')}
        >
          <PalaroidCard {...sliderCards[hiddenLeftIndex]} />
        </div>
        <div
          key={leftIndex}
          className={[classes.left, classes.card].join(' ')}
          onClick={prev}
        >
          <PalaroidCard image={sliderCards[leftIndex].image} />
        </div>
        <div
          key={activeIndex}
          className={[classes.active, classes.card].join(' ')}
        >
          <PalaroidCard {...sliderCards[activeIndex]} />
        </div>
        <div
          key={rightIndex}
          className={[classes.right, classes.card].join(' ')}
          onClick={next}
        >
          <PalaroidCard image={sliderCards[rightIndex].image} />
        </div>
        <div
          key={rightmostIndex}
          className={[classes.rightmost, classes.card].join(' ')}
          onClick={next}
        >
          <PalaroidCard image={sliderCards[rightmostIndex].image} />
        </div>
        <div
          key={hiddenRightIndex}
          className={[classes.hiddenright, classes.card].join(' ')}
        >
          <PalaroidCard {...sliderCards[hiddenRightIndex]} />
        </div>
      </div>
    </div>
  );
};

export default PalaroidSlider;

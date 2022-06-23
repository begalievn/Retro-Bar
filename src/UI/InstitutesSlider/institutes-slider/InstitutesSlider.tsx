import React, { FC, useState, useEffect } from 'react';
import InstituteCard from '../components/institute-card/InstituteCard';

// imported images
import cardPhoto from '../../../assets/ui-images/inst-slider-photo-active.png';
import cardLogo from '../../../assets/ui-images/inst-info-keanu-logo.svg';
import sketch from '../../../assets/ui-images/inst-slider-sketch.svg';

// imported types
import { CardDataTypes } from '../../../types/institutesSliderTypes/cardTypes';

import classes from './institutesSlider.module.css';

const data: Array<CardDataTypes> = [
  {
    photo: cardPhoto,
    logo: cardLogo,
    title: 'KEANU',
    instType: 'Bar',
    location: 'Манаса 28',
    time: '18:00-05:00',
    phone: '0501 818 189',
    hotDisPrice: 700,
    saladPrice: 900,
    dessertPrice: 500,
    winePrice: 1000,
    stars: 4.5,
    isActive: false,
  },
  {
    photo: cardPhoto,
    logo: cardLogo,
    title: 'KEANU',
    instType: 'Bar',
    location: 'Манаса 28',
    time: '18:00-05:00',
    phone: '0501 818 189',
    hotDisPrice: 700,
    saladPrice: 900,
    dessertPrice: 500,
    winePrice: 1000,
    stars: 4.5,
    isActive: false,
  },
  {
    photo: cardPhoto,
    logo: cardLogo,
    title: 'KEANU',
    instType: 'Bar',
    location: 'Манаса 28',
    time: '18:00-05:00',
    phone: '0501 818 189',
    hotDisPrice: 700,
    saladPrice: 900,
    dessertPrice: 500,
    winePrice: 1000,
    stars: 4.5,
    isActive: false,
  },
  {
    photo: cardPhoto,
    logo: cardLogo,
    title: 'KEANU',
    instType: 'Bar',
    location: 'Манаса 28',
    time: '18:00-05:00',
    phone: '0501 818 189',
    hotDisPrice: 700,
    saladPrice: 900,
    dessertPrice: 500,
    winePrice: 1000,
    stars: 4.5,
    isActive: false,
  },
  {
    photo: cardPhoto,
    logo: cardLogo,
    title: 'KEANU',
    instType: 'Bar',
    location: 'Манаса 28',
    time: '18:00-05:00',
    phone: '0501 818 189',
    hotDisPrice: 700,
    saladPrice: 900,
    dessertPrice: 500,
    winePrice: 1000,
    stars: 4.5,
    isActive: false,
  },
];

const InstitutesSlider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideCards, setSlideCards] = useState<CardDataTypes[]>([]);

  useEffect(() => {
    let cardsArr: Array<CardDataTypes> = [];

    if (data === undefined) {
      return;
    }

    Array.isArray(data) ? (cardsArr = [...data]) : (cardsArr = [data]);

    let i = 0;
    while (cardsArr.length < 6) {
      cardsArr.push(cardsArr[i]);
      i++;
    }
    setSlideCards(cardsArr);
  }, [data]);

  let leftIndex = activeIndex ? activeIndex - 1 : slideCards.length - 1;
  let rightIndex = activeIndex === slideCards.length - 1 ? 0 : activeIndex + 1;

  let hiddenLeftIndex = leftIndex ? leftIndex - 1 : slideCards.length - 1;
  let hiddenRightIndex =
    rightIndex === slideCards.length - 1 ? 0 : rightIndex + 1;

  function prev() {
    setActiveIndex(activeIndex ? activeIndex - 1 : slideCards.length - 1);
    console.log(activeIndex);
  }

  function next() {
    setActiveIndex(activeIndex === slideCards.length - 1 ? 0 : activeIndex + 1);
    console.log(activeIndex);
  }

  return (
    <div className={classes.slider}>
      <div className={classes.slider_title_container}>
        <h2 className={classes.slider_title}>{'Заведения'}</h2>
        <img src={sketch} />
      </div>

      <div className={classes.carousel}>
        <div
          key={hiddenLeftIndex}
          className={[classes.card, classes.hiddenLeft].join(' ')}
        >
          <InstituteCard {...slideCards[hiddenLeftIndex]} />
        </div>
        <div
          key={leftIndex}
          className={[classes.card, classes.left].join(' ')}
          onClick={prev}
        >
          <InstituteCard {...slideCards[leftIndex]} />
        </div>
        <div
          key={activeIndex}
          className={[classes.card, classes.active].join(' ')}
        >
          <InstituteCard {...{ ...slideCards[activeIndex], isActive: true }} />
        </div>
        <div
          key={rightIndex}
          className={[classes.card, classes.right].join(' ')}
          onClick={next}
        >
          <InstituteCard {...slideCards[rightIndex]} />
        </div>
        <div
          key={hiddenRightIndex}
          className={[classes.card, classes.hiddenRight].join(' ')}
        >
          <InstituteCard {...slideCards[hiddenRightIndex]} />
        </div>
      </div>
    </div>
  );
};

export default InstitutesSlider;

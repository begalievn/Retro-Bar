import React, { useState, useEffect, FC } from 'react';

// imported libraries
import { useSwipeable } from 'react-swipeable';

import TopInstCard from '../top-inst-card/TopInstCard';

import classes from './instSlider.module.css';
import { IPhoto } from '../../../../../types/apiTypes/photo';

export interface TopInstCardsType {
  image?: IPhoto;
  title: string;
  time: string;
  phone: string;
  location: string;
}

interface TopInstCardsProps {
  cardsData: TopInstCardsType[];
}

const InstitutionsSlider: FC<TopInstCardsProps> = ({ cardsData }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideCards, setSlideCards] = useState<TopInstCardsType[]>([]);

  useEffect(() => {
    let cardsArr: TopInstCardsType[] = [];

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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
  });

  return (
    <div className={classes.container}>
      <div className={classes.carousel}>
        <div
          key={hiddenLeftIndex}
          className={[classes.hiddenLeft, classes.card].join(' ')}
        >
          <TopInstCard isActive={false} {...slideCards[hiddenLeftIndex]} />
        </div>
        <div
          key={leftIndex}
          className={[classes.left, classes.card].join(' ')}
          onClick={prev}
        >
          <TopInstCard isActive={false} {...slideCards[leftIndex]} />
        </div>
        <div
          {...swipeHandlers}
          key={activeIndex}
          className={[classes.active, classes.card].join(' ')}
        >
          <TopInstCard isActive={true} {...slideCards[activeIndex]} />
        </div>
        <div
          key={rightIndex}
          className={[classes.right, classes.card].join(' ')}
          onClick={next}
        >
          <TopInstCard isActive={false} {...slideCards[rightIndex]} />
        </div>
        <div
          key={hiddenRightIndex}
          className={[classes.hiddenRight, classes.card].join(' ')}
        >
          <TopInstCard isActive={false} {...slideCards[hiddenRightIndex]} />
        </div>
      </div>
    </div>
  );
};

export default InstitutionsSlider;

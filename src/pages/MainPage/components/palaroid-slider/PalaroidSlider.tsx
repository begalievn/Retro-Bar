import React, { FC, useState, useEffect, ReactNode } from 'react';
// imported libraries
import { useSwipeable } from 'react-swipeable';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// imported components
import PalaroidCard from '../palaroid-card/PalaroidCard';

import classes from './palaroidSlider.module.css';
import { PalaroidCardTypes } from '../../../../types/mainPageTypes/palaroidCardTypes';

interface PalaroidSliderPropsType {
  cards: PalaroidCardTypes[];
}

const PalaroidSlider: FC<PalaroidSliderPropsType> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sliderCards, setSliderCards] = useState<PalaroidCardTypes[]>([]);
  const [sliderCardsMobile, setSliderCardsMobile] = useState<
    PalaroidCardTypes[]
  >([]);

  useEffect(() => {
    let arrCards: Array<PalaroidCardTypes> = [];

    if (cards === undefined) return;

    Array.isArray(cards) ? (arrCards = [...cards]) : (arrCards = [cards]);

    // Here I add additional cards if there isn't necessary value
    let i = 0;
    while (arrCards.length <= 6) {
      arrCards.push(arrCards[i]);
      i++;
    }

    setSliderCards([...arrCards]);
    setSliderCardsMobile([...arrCards].slice(0, 5));
  }, [cards]);

  let leftIndex = activeIndex ? activeIndex - 1 : sliderCards.length - 1;
  let rightIndex = activeIndex === sliderCards.length - 1 ? 0 : activeIndex + 1;
  let rightmostIndex =
    rightIndex === sliderCards.length - 1 ? 0 : rightIndex + 1;

  let hiddenLeftIndex = leftIndex ? leftIndex - 1 : sliderCards.length - 1;
  let hiddenRightIndex =
    rightmostIndex === sliderCards.length - 1 ? 0 : rightmostIndex + 1;

  // Mobile version carousel indexes
  let leftIndexMobile = activeIndex
    ? activeIndex - 1
    : sliderCardsMobile.length - 1;
  let rightIndexMobile =
    activeIndex === sliderCardsMobile.length - 1 ? 0 : activeIndex + 1;

  function prev() {
    setActiveIndex((prev: number) =>
      prev ? prev - 1 : sliderCards.length - 1
    );
  }

  function next() {
    setActiveIndex((prev: number) =>
      prev === sliderCards.length - 1 ? 0 : prev + 1
    );
  }

  function prevMobile() {
    setActiveIndex((prev: number) =>
      prev ? prev - 1 : sliderCardsMobile.length - 1
    );
  }

  function nextMobile() {
    setActiveIndex((prev: number) =>
      prev === sliderCardsMobile.length - 1 ? 0 : prev + 1
    );
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
  });

  const swipeHandlersMobile = useSwipeable({
    onSwipedLeft: () => nextMobile(),
    onSwipedRight: () => prevMobile(),
  });

  return (
    <div className={classes.container}>
      <div className={classes.ellipse_deco_1}></div>
      <div className={classes.ellipse_deco_2}></div>
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
          {...swipeHandlers}
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
      {/* Carousel in small screens */}
      <div className={classes.carousel_mobile}>
        <div
          key={leftIndexMobile}
          className={[classes.left, classes.card].join(' ')}
          onClick={prevMobile}
        >
          <PalaroidCard
            image={sliderCardsMobile[leftIndexMobile]?.image}
            title={''}
            description={''}
            date={''}
            isActive={false}
          />
        </div>
        <div
          {...swipeHandlersMobile}
          key={activeIndex}
          className={[classes.active, classes.card].join(' ')}
        >
          <PalaroidCard isActive={true} {...sliderCardsMobile[activeIndex]} />
        </div>
        <div
          key={rightIndexMobile}
          className={[classes.right, classes.card].join(' ')}
          onClick={nextMobile}
        >
          <PalaroidCard
            image={sliderCardsMobile[rightIndexMobile]?.image}
            title={''}
            description={''}
            date={''}
            isActive={false}
          />
        </div>
      </div>
      <div className={classes.slider_pagination}>
        <ul>
          {sliderCardsMobile.map((item, index) => (
            <li
              key={index}
              // onClick={() => {
              //   paginationHandler(index);
              // }}
              className={
                activeIndex === index
                  ? classes.active_li
                  : classes.pagination_li
              }
            >
              0{index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PalaroidSlider;

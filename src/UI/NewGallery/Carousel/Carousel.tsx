import React, { useEffect, useState } from 'react'
import styles from './carousel.module.css'
import arrow from '../../../assets/videoPage/arrowRight.svg'
import { IPhoto } from '../../../types/apiTypes/photo';

type CarouselProps = {
  pictures: IPhoto[] ;
  count: (arr: Array<number>,pic:string) => void;
};

function Carousel({ pictures, count }: CarouselProps) {

  const [offset, setOffset] = useState<number | 0>(0);

  
  useEffect(() => {
    const sumOfPics = pictures.length
    const currPic = (Math.abs(offset) / 100) + 1
    count([currPic, sumOfPics],pictures[currPic-1].url)
    }, [offset])




  const leftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 100;
      return Math.min(newOffset, 0)
    })
  }
  const rightClick = () => {

    setOffset((currentOffset) => {
      const newOffset = currentOffset - 100;
      const maxOffset = -(100 * (pictures.length - 1));
      return Math.max(newOffset, maxOffset)
    })

  }

  let x1: number | null = null;
  let y1: number | null = null;

  const touchStart = (e: React.TouchEvent) => {
    const firstTouch = e.touches[0]
    x1 = firstTouch.clientX
    y1 = firstTouch.clientY
  }
  const touchMove = (e: React.TouchEvent) => {
    if (!x1 || !y1) {
      return false
    }
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) leftClick()
      else rightClick();
    }
    x1 = null;
    y1 = null;
  }

  return (
    <div className={styles.carouselContainer}>
      <img onClick={() => leftClick()} src={arrow} alt="" className={styles.arrowLeft} />
      <div onTouchStart={(e) => touchStart(e)} onTouchMove={(e) => touchMove(e)} className={styles.window}>

        <div style={{ transform: `translateX(${offset}%)` }} className={styles.allPagesContainer}>
          {

            pictures.map((item) => {
              return (
                <img key={item.id} className={styles.image} src={item.url} alt="" />

              )
            })
          }
        </div>
      </div>
      <img onClick={() => rightClick()} src={arrow} alt="" className={styles.arrowRight} />
    </div>
  )
}

export default Carousel
import React, { Children, useEffect, useState } from 'react'
import styles from './newGallery.module.css';
import crossBtn from "../../assets/photoPageImages/gallery-images/cross.png";
import closeBtn from "../../assets/photoPageImages/gallery-images/close.svg";

import { IPhotosAnother } from '../../pages/PhotoPage/components/PhotoMain/interfaces';


import UniButton from './uniButton/UniButton'
import { IPhotos } from '../../types/apiTypes/photo'

import { IPhoto } from '../../types/apiTypes/photo'




import { Swiper } from 'swiper/react';
import ImageBlock from './ImageBlock/ImageBlock';
import Carousel from './Carousel/Carousel';





type NewGalleryProps = {
  close: () => void;
  eventInfo:  {
    photos:Array<IPhoto>,
    establishment: string,
    event:string
  };
}
interface ISlideInfo {
  image: string;
  count: Array<number>;

}



function NewGallery({ close, eventInfo }: NewGalleryProps) {
  const [slideInfo, setSlideInfo] = useState<ISlideInfo>({ image: "", count: [1, 2] })
  

  console.log(eventInfo, 'evntInfo');

  const setCounter = (arr: Array<number>,pic:string) => {

    
    setSlideInfo((slideInfo) => {
      return {
        ...slideInfo,
        count: arr,
        image: pic,
      }
    })

  }
console.log('dddddd');


  
  if(!eventInfo){
    return null
  }
  

  return (
    <section className={styles.back}>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.title}>
            <h3 className={styles.placeName}>{eventInfo.establishment}</h3>
            <p className={styles.eventName}>{eventInfo.event}</p>

          </div>
          <img onClick={close} className={styles.cross} src={crossBtn} alt="" />
          <img onClick={close} className={styles.close} src={closeBtn} alt="" />
        </section>


        
            <Carousel pictures={eventInfo.photos!} count={setCounter}/>
        <footer className={styles.footer}>
          <div className={styles.left}>
            <p className={styles.counter}>{slideInfo.count[0] + ' из ' + slideInfo.count[1]}</p>
            <UniButton text='Поделиться' />
          </div>
          <UniButton text='Скачать' image={slideInfo.image} />


        </footer>
      </div>
    </section>
  )
}

export default NewGallery
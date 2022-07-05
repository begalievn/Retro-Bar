import React, { Children, useEffect, useState } from 'react'
import styles from './newGallery.module.css';
import crossBtn from "../../assets/photoPageImages/gallery-images/cross.png";
import closeBtn from "../../assets/photoPageImages/gallery-images/close.svg";

import { IPhotosAnother } from '../../pages/PhotoPage/components/PhotoMain/interfaces';


import UniButton from './uniButton/UniButton'
import { IPhotos } from '../../types/apiTypes/photo'


import { Swiper } from 'swiper/react';
import ImageBlock from './ImageBlock/ImageBlock';
import Carousel from './Carousel/Carousel';
import { count } from 'console';
import { Image } from '@mui/icons-material';


type NewGalleryProps = {
  close: () => void;
  eventInfo: IPhotosAnother | IPhotos | null;
}
interface ISlideInfo {
  image: string;
  count: Array<number>;

}



function NewGallery({ close, eventInfo }: NewGalleryProps) {
  const [slideInfo, setSlideInfo] = useState<ISlideInfo>({ image: "", count: [1, 2] })

  console.log(eventInfo, 'DATA');

  const setCounter = (arr: Array<number>) => {


    setSlideInfo((slideInfo) => {
      return {
        ...slideInfo,
        count: arr,
        image: "",
      }
    })

  }





  return (
    <section className={styles.back}>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.title}>
            <h3 className={styles.placeName}>Zeppelin Bar</h3>
            <p className={styles.eventName}>STREENT CREDIBILITY</p>

          </div>
          <img onClick={close} className={styles.cross} src={crossBtn} alt="" />
          <img onClick={close} className={styles.close} src={closeBtn} alt="" />
        </section>


        {
          eventInfo ?
            <Carousel count={setCounter}>
           
              {
                eventInfo.photos?.map((item) => {
                  return (
                    <img key={item.id} className={styles.image} src={item.url} alt="" />

                  )
                })

              }


            </Carousel>


            :
            null
        }





        <footer className={styles.footer}>
          <div className={styles.left}>
            <p className={styles.counter}>{slideInfo.count[0] + ' из ' + slideInfo.count[1]}</p>
            <UniButton text='Поделиться' />
          </div>
          <UniButton text='Скачать' image={"https://i.picsum.photos/id/900/200/200.jpg?hmac=ZrAJ9H_K0TLi9qA-7h0aKGGzI3tLtlu1lx6ntCljBfc"} />


        </footer>
      </div>
    </section>
  )
}

export default NewGallery
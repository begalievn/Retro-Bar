import React, { Children, useEffect, useState } from 'react'
import styles from './newGallery.module.css';
import crossBtn from "../../assets/photoPageImages/gallery-images/cross.png";
import closeBtn from "../../assets/photoPageImages/gallery-images/close.svg";

import UniButton from './uniButton/UniButton'


import { Swiper } from 'swiper/react';
import ImageBlock from './ImageBlock/ImageBlock';
import Carousel from './Carousel/Carousel';
import { count } from 'console';
import { Image } from '@mui/icons-material';


type NewGalleryProps = {
  close: () => void;

}
interface ISlideInfo {
  image: string;
  count: Array<number>;
  
}

const images = [

]

function NewGallery({ close }: NewGalleryProps) {
  const [slideInfo, setSlideInfo] = useState<ISlideInfo>({ image: "", count: [1, 2] })


  const setCounter = (arr: Array<number>) => {
    
     
    setSlideInfo((slideInfo)=>{
      return {
        ...slideInfo,
        count:arr,
        image:"",
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


        <Carousel count={setCounter} >

          <img className={styles.image} src='https://picsum.photos/id/1/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/230/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/238/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/239/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/233/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/231/500' alt="" />

        </Carousel>





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
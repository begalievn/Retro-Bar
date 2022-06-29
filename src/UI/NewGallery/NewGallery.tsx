import React, { useEffect, useState } from 'react'
import styles from './newGallery.module.css';
import crossBtn from "../../assets/photoPageImages/gallery-images/cross.png";
import closeBtn from "../../assets/photoPageImages/gallery-images/close.svg";

import UniButton from './uniButton/UniButton'

import download from '../../assets/photoPageImages/gallery-images/download-icon.svg'
import share from '../../assets/photoPageImages/gallery-images/share-icon.svg'
import { Swiper } from 'swiper/react';
import ImageBlock from './ImageBlock/ImageBlock';
import Carousel from './Carousel/Carousel';


type NewGalleryProps = {
  close:()=>void;
}



function NewGallery({close}:NewGalleryProps) {
  const [count, setCount] = useState <Array<number>>([1,2])

  
  const setCounter = (arr:Array<number>) => {
   setCount(arr)
    
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

          <img className={styles.image} src='https://picsum.photos/id/237/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/230/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/238/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/239/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/233/500' alt="" />
          <img className={styles.image} src='https://picsum.photos/id/231/500' alt="" />

        </Carousel>





        <footer className={styles.footer}>
          <div className={styles.left}>
            <p className={styles.counter}>{count[0]+' из '+count[1]}</p>
            <UniButton text='Поделиться' image={share} />
          </div>
          <UniButton text='Скачать' image={download} />


        </footer>
      </div>
    </section>
  )
}

export default NewGallery
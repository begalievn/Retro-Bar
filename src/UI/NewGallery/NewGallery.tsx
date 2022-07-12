import React, { Children, useEffect, useState } from 'react';
import styles from './newGallery.module.css';
import crossBtn from '../../assets/photoPageImages/gallery-images/cross.png';
import closeBtn from '../../assets/photoPageImages/gallery-images/close.svg';
import UniButton from './uniButton/UniButton';
import { IPhotos } from '../../types/apiTypes/photo';
import { IPhoto } from '../../types/apiTypes/photo';
import Carousel from './Carousel/Carousel';
import axios from 'axios';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

type NewGalleryProps = {
  close: () => void;
  eventInfo: {
    photos: Array<IPhoto>;
    establishment: string;
    event: string;
  };
};
interface ISlideInfo {
  image: string;
  count: Array<number>;
}

function NewGallery({ close, eventInfo }: NewGalleryProps) {
  const [slideInfo, setSlideInfo] = useState<ISlideInfo>({
    image: '',
    count: [1, 2],
  });

  const setCounter = (arr: Array<number>, pic: string) => {
    setSlideInfo((slideInfo) => {
      return {
        ...slideInfo,
        count: arr,
        image: pic,
      };
    });
  };
  if (!eventInfo) {
    return null;
  }

  const [imageUrl, setImageUrl] = useState<any>('')


 const  func = (image:any)=>{

  fetch(image)
  .then((response) => {
    return response.blob();
  })
  .then((blob) => {   
    let data = URL.createObjectURL(blob)
    setImageUrl(data)
  });



}
  
  useEffect(() => {
    if(slideInfo.image){
    func(slideInfo.image)

    }
  }, [slideInfo.image])
  

  


console.log(slideInfo);

  

  return (
    <section className={styles.back}>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.title}>
            <h3 className={styles.placeName}>{eventInfo.establishment}</h3>
            <p className={styles.eventName}>{eventInfo.event}</p>
          </div>
          <div>
            <img
              onClick={close}
              className={styles.cross}
              src={crossBtn}
              alt=""
            />
            {/* <img
              onClick={close}
              className={styles.close}
              src={closeBtn}
              alt=""
            /> */}
          </div>
        </section>

        <Carousel pictures={eventInfo.photos!} count={setCounter} />
        <footer className={styles.footer}>
          <div className={styles.left}>
            <p className={styles.counter}>
              {slideInfo.count[0] + ' из ' + slideInfo.count[1]}
            </p>
            <UniButton text="Поделиться" />
          </div>
          <a href={imageUrl} download={eventInfo.establishment} >
          <UniButton text="Скачать" image={slideInfo.image} />
          </a>
        </footer>
      </div>
    </section>
  );
}

export default NewGallery;

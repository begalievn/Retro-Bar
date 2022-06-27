import React from 'react'
import styles from './newGallery.module.css';
import cross from "../../assets/photoPageImages/gallery-images/cross.png";
import close from "../../assets/photoPageImages/gallery-images/close.svg";

import UniButton from './uniButton/UniButton'

import download from '../../assets/photoPageImages/gallery-images/download-icon.svg'
import share from '../../assets/photoPageImages/gallery-images/share-icon.svg'

function NewGallery() {
  return (
    <section className={styles.back}>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles.title}>
            <h3 className={styles.placeName}>Zeppelin Bar</h3>
            <p className={styles.eventName}>STREENT CREDIBILITY</p>

          </div>
          <img className={styles.cross} src={cross} alt="" />
          <img  className={styles.close} src={close} alt="" />
        </section>
        <footer className={styles.footer}>
          <div className={styles.left}>
          <p className={styles.counter}>1 из 6</p>
          <UniButton text='Поделиться' image={share}/>
          </div>
          <UniButton text='Скачать' image={download}/>
         

        </footer>
      </div>
    </section>
  )
}

export default NewGallery
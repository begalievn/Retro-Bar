import React from 'react'
import styles from './top.module.css'
import film1 from '../../../../assets/institution/top/film1.png'
import film2 from '../../../../assets/institution/top/film2.png'
import tape1 from '../../../../assets/institution/top/tape1.png'
import tape2 from '../../../../assets/institution/top/tape2.png'
import calendar from '../../../../assets/institution/top/calendar.svg'

import film1Image1 from '../../../../assets/institution/top/film1Image1.png'
import film1Image2 from '../../../../assets/institution/top/film1Image2.jpg'

import film2Image from '../../../../assets/institution/top/film2Image.png'

import topclock from '../../../../assets/institution/top/topPlaceInfo/topclock.svg'
import topgeotag from '../../../../assets/institution/top/topPlaceInfo/topgeotag.svg'
import topphone from '../../../../assets/institution/top/topPlaceInfo/topphone.svg'


export type TopProps = 
{

 data: {
    title:string,
    workingHours:string,
    phoneNumber:string,
    adress:string,
    leftBlockPhotoLeft:string,
    leftBlockPhotoRight:string,
    rightBlockPhoto:string,
  
  
  }
}



function Top({data}:TopProps) {

const {
   title,
  workingHours,
  phoneNumber,
  adress,
  leftBlockPhotoLeft,
  leftBlockPhotoRight,
  rightBlockPhoto,
} = data 

  return (
    <section className={styles.top}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>Топ заведений</h2>

      </div>
      <div className={styles.topPoster}>
      

        <div className={styles.topFilmBlock1}>
          <img className={styles.topFilm1} src={film1} alt="" />
          <div className={styles.film1ImageBlock1}>
            <h3 className={styles.infoTitle}
            >{title}</h3>
            <div className={styles.infoRow}>
              <img className={styles.icon} src={topclock} alt="" />
              <p className={styles.infoRowText}>{workingHours}</p>
            </div>
            <div className={styles.infoRow}>
              <img className={styles.icon} src={topphone} alt="" />
              <p className={styles.infoRowText}>{phoneNumber}</p>
            </div>
            <div className={styles.infoRow}>
              <img className={styles.icon} src={topgeotag} alt="" />
              <p className={styles.infoRowText}>{adress}</p>

            </div>
            <img className={styles.film1Image1} src={film1Image1} alt="" />

          </div>
          <div className={styles.film1ImageBlock2}>
            <img className={styles.film1Image2} src={film1Image2} alt="" />
          </div>
          <img className={styles.tape1} src={tape1} alt="" />
          <img className={styles.tape3} src={tape2} alt="" />

        </div>
        <div className={styles.topFilmBlock2}>
          <img src={film2} className={styles.topFilm2} alt="" />

          <div className={styles.film2ImageBlock}>


            <img className={styles.topFilm2Image} src={film2Image} alt="" />


          </div>
          <img className={styles.tape2} src={tape2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Top
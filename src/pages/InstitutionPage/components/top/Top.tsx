import React from 'react'
import styles from './top.module.css'
import film1 from '../../../../assets/institution/film1.png'
import film2 from '../../../../assets/institution/film2.png'
import tape1 from '../../../../assets/institution/tape1.png'
import tape2 from '../../../../assets/institution/tape2.png'
import calendar from '../../../../assets/institution/calendar.svg'
function Top() {
  return (
    <section className={styles.top}>
      <div className={styles.topHeader}>
        <h2>Топ заведений</h2>

      </div>
      <div className={styles.topPoster}>
        <img className={styles.calendar} src={calendar} alt=""   />

        <div className={styles.topFilmBlock1}>
          <img className={styles.pic1} src={film1} alt="" />
          <img  className={styles.tape1} src={tape1} alt="" />
          <img className={styles.tape3}  src={tape2} alt="" />

        </div>
        <div className={styles.topFilmBlock2}>
          <img className={styles.pic2} src={film2} alt="" />
          <img className={styles.tape2}  src={tape2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Top
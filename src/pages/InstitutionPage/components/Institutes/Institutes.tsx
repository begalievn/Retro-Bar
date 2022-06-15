import { style } from '@mui/system'
import React from 'react'
import styles from './institutes.module.css'
import tablet1 from '../../../../assets/institution/tablet1.png'
import tablet3 from '../../../../assets/institution/tablet3.png'
import tablet2 from '../../../../assets/institution/tablet2.png'
import PlaceInfo from '../placeInfo/PlaceInfo'


function Institutes() {
  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h2>Заведения</h2>
      </div>
      <section className={styles.cards}>
        <div className={styles.sideCard}>
          <div className={styles.sideCard1Block}>
            <img src={tablet1} alt="" className={styles.sideCard1Canvas} />
            <img src="" alt="" className={styles.sideCard1Image} />
          </div>
        </div>
        <div className={styles.middleCard}>
          <div className={styles.middleCardBlock}>
            <img src={tablet2} alt="" className={styles.middleCardCanvas} />
            <img src="" alt="" className={styles.middleCardImage} />
          </div>
        </div>
         <PlaceInfo />
        <div className={styles.sideCard}>
          <div className={styles.sideCard2Block}>
            <img src={tablet3} alt=""  className={styles.sideCard2Canvas} />
            <img src="" alt="" className={styles.sideCard2Image} />
          </div>
        </div>
      </section>

      
      <section className={styles.cardsMobile}>
        <div className={styles.sideCard}>
          <div className={styles.sideCard1Block}>
            <img src={tablet1} alt="" className={styles.sideCard1Canvas} />
            <img src="" alt="" className={styles.sideCard1Image} />
          </div>
        </div>
        <div className={styles.middleCard}>
          <div className={styles.middleCardBlock}>
            <img src={tablet2} alt="" className={styles.middleCardCanvas} />
            <img src="" alt="" className={styles.middleCardImage} />
          </div>
        </div>
        <div className={styles.sideCard}>
          <div className={styles.sideCard2Block}>
            <img src={tablet3} alt=""  className={styles.sideCard2Canvas} />
            <img src="" alt="" className={styles.sideCard2Image} />
          </div>
        </div>
         <PlaceInfo />
      </section>
    </section>
      

     

  )
}

export default Institutes
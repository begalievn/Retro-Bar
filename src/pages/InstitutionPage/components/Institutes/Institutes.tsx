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
          <div className={styles.sideCardTablet1Block}>
            <img src={tablet1} alt="" />
            <img src="" alt="" className={styles.sideCardTabletImage1} />
          </div>
        </div>
        <div className={styles.middleCard}>
          <div className={styles.middleCardTabletBlock}>
            <img src={tablet2} alt="" />
            <img src="" alt="" className={styles.middleCardTabletImage} />
          </div>
         <PlaceInfo/>
        </div>
        <div className={styles.sideCard}>
          <div className={styles.sideCardTablet2Block}>
            <img src={tablet3} alt="" />
            <img src="" alt="" className={styles.sideCardTabletImage2} />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Institutes
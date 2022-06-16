import { style } from '@mui/system'
import React, { useState } from 'react'
import styles from './institutes.module.css'
import tablet1 from '../../../../assets/institution/middlePart/tablet1.png'
import tablet3 from '../../../../assets/institution/middlePart/tablet3.png'
import tablet2 from '../../../../assets/institution/middlePart/tablet2.png'

import image1 from '../../../../assets/institution/middlePart/image1.png'
import image3 from '../../../../assets/institution/middlePart/image3.png'
import image2 from '../../../../assets/institution/middlePart/image2.png'

import PlaceInfo from '../placeInfo/PlaceInfo'



interface clickHandlerProps{
  direction: String;
}
function Institutes() {

  const [positon, setPositon] = useState<clickHandlerProps>('center')
  let counter = 0;
  const clickHandler = (direction:clickHandlerProps)=>{
    console.log(direction);
   
    setPositon(direction);
  }
  
 

  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <h2>Заведения</h2>
      </div>
      <section className={styles.cards}>
        <div className={styles.sideCard}>
          <div className={styles.sideCard1Block}>
            <img src={tablet1} alt="" className={styles.sideCard1Canvas} />
            <div className={styles.imageBlock}>
            <img src={image1} alt="" className={styles.sideCard1Image} />

            </div>
            <div className={styles.sideCardsDarken}></div>
          </div>
        </div>
        <div className={styles.middleCard}>
          <div className={styles.middleCardBlock}>
            <img src={tablet2} alt="" className={styles.middleCardCanvas} />
            <div className={styles.imageBlock}>
            {/* <img src={image2} alt="" className={styles.middleCardImage} /> */}

            </div>
          </div>
        </div>
         <PlaceInfo clickHandler={clickHandler} />
        <div className={styles.sideCard}>
          <div className={styles.sideCard2Block}>
            <img src={tablet3} alt=""  className={styles.sideCard2Canvas} />
            <div className={styles.imageBlock}>
            {/* <img src={image3} alt="" className={styles.sideCard2Image} /> */}

            </div>
            <div className={styles.sideCardsDarken}></div>
          </div>
        </div>
      </section>

      
      <section className={styles.cardsMobile}>
        <div className={styles.cardsM} style={{
          justifyContent:positon
        }}>

        <div className={styles.sideCard}>
          <div className={styles.sideCard1Block}>
            <img src={tablet1} alt="" className={styles.sideCard1Canvas} />
            <img src={image1} alt="" className={styles.sideCard1Image} />
          </div>
        </div>
        <div className={styles.middleCard}>
          <div className={styles.middleCardBlock}>
            <img src={tablet2} alt="" className={styles.middleCardCanvas} />
            <img src={image2} alt="" className={styles.middleCardImage} />
          </div>
        </div>
        <div className={styles.sideCard}>
          <div className={styles.sideCard2Block}>
            <img src={tablet3} alt=""  className={styles.sideCard2Canvas} />
            <img src={image3} alt="" className={styles.sideCard2Image} />
          </div>
        </div>
        </div>
         <PlaceInfo clickHandler={clickHandler} />
      </section>

    </section>
      

     

  )
}

export default Institutes
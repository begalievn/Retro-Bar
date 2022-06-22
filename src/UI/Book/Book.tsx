import React from 'react'
import styles from './book.module.css'
import blackfilm from '../../assets/book/blackFilm.png'
import blackfilmgradient from '../../assets/book/blackFilmGradient.png'


import image from '../../assets/book/image.png'
import SubmitButton from '../SubmitButton/SubmitButton'


function Book() {
  const pageWidth = document.documentElement.scrollWidth
console.log(pageWidth);

  return (
    <section className={styles.container}>
      <div className={styles.imageBlock}>
        <img src={image} className={styles.image} alt="" />
      </div>
      <div className={styles.contactBlock}>
        <h2 className={styles.title}>Связаться с заведением</h2>
        <p className={styles.text}>Современные технологии достигли такого уровня, что перспективное планирование способствует.</p>
        <SubmitButton />
      </div>
      {/* <img className={styles.background} src={blackfilmgradient} alt="" /> */}
      {/* <div className={}></div> */}
    </section>
  )
}

export default Book
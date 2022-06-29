import React from 'react'
import styles from './imageBlock.module.css'

function ImageBlock() {
  return (
        <section className={styles.imageBlock}>
          <img className={styles.image} src='https://picsum.photos/200/200' alt="" />
        </section>
  )
}

export default ImageBlock
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './PhotoNav.module.css'
const PhotoNav:FC = () => {
  return (
    <nav className={styles.photoNav}>
      <button >Фото</button>
      <button>Календарь</button>
      <button>Галерея</button>
    </nav>
  )
}

export default PhotoNav
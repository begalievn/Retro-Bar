import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../../../../UI/Calendar/Calendar'
import styles from './PhotoNav.module.css'
const PhotoNav:FC = () => {
  const [selectedDate, setSelectedDay] = useState(new Date());
  const [show, setShow] = useState(false)
  return (
    <>
      <nav className={styles.photoNav}>
        <button >Фото</button>
        <button onClick={() => setShow(true)} >Календарь</button>
        <button>Галерея</button>
      </nav>
      {show && <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)}/>}
    </>
  )
}

export default PhotoNav
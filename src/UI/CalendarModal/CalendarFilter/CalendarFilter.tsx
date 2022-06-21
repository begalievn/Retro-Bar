import React, { FC } from 'react'
import styles from './CalendarFilter.module.css'
const CalendarFilter:FC = () => {
  return (
    <div className={styles.calendar_filter}>
      <button className={styles.calendar_filter_btn}>Светская жизнь</button>
      <button className={styles.calendar_filter_btn}>Клубы</button>
      <button className={styles.calendar_filter_btn}>Бары</button>
      <button className={styles.calendar_filter_btn}>Караоке</button>
    </div>
  )
}


export default CalendarFilter
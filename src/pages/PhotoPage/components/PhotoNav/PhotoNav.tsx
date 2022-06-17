import React, { FC, useState } from 'react'
import CalendarModal from '../../../../UI/CalendarModal/CalendarModal'
import styles from './PhotoNav.module.css'
const PhotoNav:FC = () => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.photoNav}>
        <button >Фото</button>
        <button onClick={() => setShow(!show)} >Календарь</button>
        <button>Галерея</button>
      </div>
      {show && <CalendarModal open={open} setOpen={setOpen}/>}
    </>
  )
}

export default PhotoNav
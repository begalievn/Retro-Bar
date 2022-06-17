import React, { FC, useState } from 'react'
import CalendarModal from '../../../../UI/CalendarModal/CalendarModal'
import styles from './PhotoNav.module.css'
const PhotoNav:FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className={styles.photoNav}>
        <button >Фото</button>
        <button onClick={handleOpen} >Календарь</button>
        <button>Галерея</button>
      </div>
      {open && <CalendarModal open={open} handleClose={handleClose} />}
    </>
  )
}

export default PhotoNav
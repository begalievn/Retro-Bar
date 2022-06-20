import React, { FC, useState } from 'react'
import CalendarModal from '../../../../UI/CalendarModal/CalendarModal'
import styles from './PhotoBreadcrumb.module.css'
const PhotoBreadcrumb:FC = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  // if(modal) {
  //   document.body.style.active_modal
  // } else {
  //   document.body.classList.remove(styles.active_modal)
  // }
  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      <div className={styles.photoBreadcrumb}>
        <button >Фото</button>
        <button onClick={toggleModal} >Календарь</button>
        <button>Галерея</button>
      </div>
      {modal && <CalendarModal modal={modal} toggleModal={toggleModal} />}
    </>
  )
}

export default PhotoBreadcrumb
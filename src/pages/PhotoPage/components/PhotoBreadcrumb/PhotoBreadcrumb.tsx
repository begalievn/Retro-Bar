import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CalendarModal from '../../../../UI/CalendarModal/CalendarModal'
import Gallery from '../../../../UI/Gallery/GalleryModal/GalleryModal';
import styles from './PhotoBreadcrumb.module.css'
const PhotoBreadcrumb:FC = () => {
  // const [modal, setModal] = useState(false);

  // const toggleModal = () => setModal(!modal);
  // if (modal) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "visible";
  // }
  const nav = useNavigate()
  return (
    <>
      <div className={styles.photoBreadcrumb}>
        <button >Фото</button>
        {/*<button onClick={toggleModal} >Календарь</button>*/}
        <button onClick={() => nav('/photo/gallery')}>Галерея</button>
      </div>
      {/*{modal && <CalendarModal modal={modal} toggleModal={toggleModal} />}*/}
    </>
  )
}

export default PhotoBreadcrumb
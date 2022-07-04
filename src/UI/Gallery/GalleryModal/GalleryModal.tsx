import React, { FC } from 'react'
// import { IPhotos } from '../../../pages/PhotoPage/components/PhotoMain/interfaces'
import styles from './GalleryModal.module.css'
import GallerySlider from '../GallerySlider/GallerySlider'
import { IPhotos } from '../../../types/apiTypes/photo'


interface GalleryModalProps {
  galleryModal:boolean;
  toggleGalleryModal:() => void
  currentEvent:IPhotos
}

const GalleryModal:FC<GalleryModalProps> = ({galleryModal,toggleGalleryModal,currentEvent}) => {


  return (
    <>
      {galleryModal && (
        <div className={styles.modal}>
          <div className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <GallerySlider toggleGalleryModal={toggleGalleryModal} currentEvent={currentEvent}/>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryModal
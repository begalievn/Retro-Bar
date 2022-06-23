import React, { FC } from 'react'
import { IPhotos } from '../../pages/PhotoPage/components/PhotoMain/interfaces'
import styles from './Gallery.module.css'
import GallerySlider from './GallerySlider/GallerySlider'


interface GalleryProps {
  galleryModal:boolean
  toggleGalleryModal:() => void
  currentEvent:IPhotos
}

const Gallery:FC<GalleryProps> = ({galleryModal,toggleGalleryModal,currentEvent}) => {


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

export default Gallery
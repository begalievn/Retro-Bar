import React, { FC, useState } from "react";
// import { IPhotos } from "../../../../pages/PhotoPage/components/PhotoMain/interfaces";
import eyeIcon from "../../../../assets/icons/eye.svg";
import pictureIcon from "../../../../assets/icons/picture.svg";
import styles from "./Events.module.css";
import Gallery from "../../../Gallery/GalleryModal/GalleryModal";
import { useAppSelector } from "../../../../app/hooks";
import { IPhoto, IPhotos } from "../../../../types/apiTypes/photo";

const Events: FC = ({ }) => {
  const [galleryModal, setGalleryModal] = useState(false);
  const toggleGalleryModal = () => setGalleryModal(!galleryModal)

  const [currentEvent, setCurrentEvent] = useState<IPhotos>()

  const onClickEvent = (event: IPhotos) => {
    setCurrentEvent(event)
    toggleGalleryModal()
    
  };

  const filterData:IPhotos[] = useAppSelector(state=> state.photos.filterPhoto)
  console.log(filterData);
  
  return (
    <>
      {filterData?.map((event, i) => (
        <div className={styles.establishment} key={i}>
          <img
            src={event.photos[0]?.url}
            onClick={() => onClickEvent(event)}
            className={styles.establishment_image}
            alt=""
          />
          <div className={styles.establishment_info}>
            <h3 className={styles.establishment_info_title}>{event.establishment.name}</h3>
            <p className={styles.establishment_info_text}>{event.eventName}</p>
            <div className={styles.establishment_info_footer}>
              <div className={styles.establishment_info_footer_numbers}>
                <div className={styles.establishment_info_footer_views}>
                  <img src={eyeIcon} alt="" /> <p>{event.views}</p>
                </div>
                <div className={styles.establishment_info_footer_photos}>
                  <img src={pictureIcon} alt="" /> <p>{event.photos.length}</p>
                </div>
              </div>

              <div className={styles.establishment_info_footer_date}>
                <p>{event.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {galleryModal && <Gallery currentEvent={currentEvent!} galleryModal={galleryModal} toggleGalleryModal={toggleGalleryModal}/>}
    </>
  );
};

export default Events;

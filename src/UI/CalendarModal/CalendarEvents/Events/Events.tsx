import React, { FC, useState } from "react";
import { IPhotos } from "../../../../pages/PhotoPage/components/PhotoMain/interfaces";
import eyeIcon from "../../../../assets/icons/eye.svg";
import pictureIcon from "../../../../assets/icons/picture.svg";
import styles from "./Events.module.css";
import Gallery from "../../../Gallery/Gallery";
interface EventsProps {
  events: IPhotos[];
}
const Events: FC<EventsProps> = ({ events }) => {
  const [galleryModal, setGalleryModal] = useState(false);
  const toggleGalleryModal = () => setGalleryModal(!galleryModal)

  const [currentEvent, setCurrentEvent] = useState<IPhotos>({});

  const onClickEvent = (event: IPhotos) => {
    setCurrentEvent(event)
    toggleGalleryModal()
    console.log(event)
  };
  return (
    <>
      {events.map((event, i) => (
        <div className={styles.establishment} key={i}>
          <img
            src={event.link}
            onClick={() => onClickEvent(event)}
            className={styles.establishment_image}
            alt=""
          />
          <div className={styles.establishment_info}>
            <h3 className={styles.establishment_info_title}>{event.name}</h3>
            <p className={styles.establishment_info_text}>{event.partyName}</p>
            <div className={styles.establishment_info_footer}>
              <div className={styles.establishment_info_footer_numbers}>
                <div className={styles.establishment_info_footer_views}>
                  <img src={eyeIcon} alt="" /> <p>{event.views}</p>
                </div>
                <div className={styles.establishment_info_footer_photos}>
                  <img src={pictureIcon} alt="" /> <p>{event.photos}</p>
                </div>
              </div>

              <div className={styles.establishment_info_footer_date}>
                <p>{event.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {galleryModal && <Gallery currentEvent={currentEvent} galleryModal={galleryModal} toggleGalleryModal={toggleGalleryModal}/>}
    </>
  );
};

export default Events;

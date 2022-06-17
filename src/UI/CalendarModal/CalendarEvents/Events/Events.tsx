import React, { FC } from "react";
import { IPhotos } from "../../../../pages/PhotoPage/components/PhotoMain/interfaces";
import eyeIcon from "../../../../assets/icons/eye.svg";
import pictureIcon from "../../../../assets/icons/picture.svg";
import styles from "./Events.module.css";
interface EventsProps {
  events: IPhotos[];
}
const Events: FC<EventsProps> = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <div className={styles.establishment}>
          <img src={event.link} className={styles.establishment_image} alt="" />
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
    </>
  );
};

export default Events;

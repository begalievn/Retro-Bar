import React, { FC, useState } from "react";
import { IPhotos } from "../interfaces";
import styles from "./ImagesList.module.css";
import eye from "../../../../../assets/photoPageImages/icons/eye.svg";
import pic from "../../../../../assets/photoPageImages/icons/pic.svg";
import camera from "../../../../../assets/photoPageImages/icons/camera.svg";
import Gallery from "../../../../../UI/Gallery/GalleryModal/GalleryModal";
import NewGallery from "../../../../../UI/NewGallery/NewGallery";

import Button from "../../Button/Button";

interface ImagesListProps {
  images: IPhotos[];
}
const ImagesList: FC<ImagesListProps> = ({ images }) => {
  const [galleryModal, setGalleryModal] = useState(false);
  const toggleGalleryModal = () => setGalleryModal(!galleryModal);

  const [currentEvent, setCurrentEvent] = useState<IPhotos>({});
  if (galleryModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  const onClickEvent = (event: IPhotos) => {
    setCurrentEvent(event);
    toggleGalleryModal();
    console.log(event);
  };
  return (
    <>
      {images.map((item) => (
        <div
          className={
            item.ad ? styles.advertise + " " + styles.events : styles.events
          }
          key={item.id}
        >
          <div className={styles.image_border}>
            <img src={item.border} alt="" />
          </div>
          <div className={styles.image} onClick={() => onClickEvent(item)}>
            <img src={item.link} alt="" />
          </div>
          {item.ad ? (
            <>
              <div className={styles.ad_info}>
                <h3 className={styles.ad_info_title}>{item.title}</h3>
                <p className={styles.ad_info_text}>{item.text}</p>
                <Button />
              </div>
              <div className={styles.ad_info_icon}>
                <img src={item.icon} alt="" />
              </div>
            </>
          ) : (
            <>
              <div className={styles.image_info}>
                <div className={styles.image_info_header}>
                  <h4 className={styles.image_info_title}>{item.name}</h4>
                  {item.studio && (
                    <div className={styles.image_info_studio}>
                      <img src={camera} alt="" />
                      <p className={styles.image_info_studio_name}>
                        {item.studio}
                      </p>
                    </div>
                  )}
                </div>
                <p className={styles.image_info_partyName}>{item.partyName}</p>
                <div className={styles.image_info_footer}>
                  <div className={styles.image_info_number}>
                    <div className={styles.image_info_views}>
                      <img src={eye} alt="" />
                      <p className={styles.image_info_views_number}>
                        {item.views}
                      </p>
                    </div>
                    <div className={styles.image_info_photos}>
                      <img src={pic} alt="" />
                      <p className={styles.image_info_photos_number}>
                        {item.photos}
                      </p>
                    </div>
                  </div>
                  <span className={styles.image_info_date}>{item.date}</span>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
      {galleryModal && (
        <Gallery
          currentEvent={currentEvent}
          galleryModal={galleryModal}
          toggleGalleryModal={toggleGalleryModal}
        />
        )}
        {/* <NewGallery/> */}
    </>
  );
};

export default ImagesList;

import React, { FC } from "react";
import { IPhotos } from "../interfaces";
import styles from "./ImagesList.module.css";
import eye from "../../../../../assets/photoPageImages/icons/eye.svg";
import pic from "../../../../../assets/photoPageImages/icons/pic.svg";
import camera from "../../../../../assets/photoPageImages/icons/camera.svg";


interface ImagesListProps {
  images: IPhotos[];
}
const ImagesList: FC<ImagesListProps> = ({ images }) => {
  return (
    <>
      {images.map((item) => (

        <div className={styles[item.class]} key={item.id}>
          <div className={styles.image_border}>
            <img src={item.border} alt="" />
          </div>
          <div className={styles.image}>
            <img src={item.link} alt="" />
          </div>
          {item.ad ? (
            <>
              <div className={styles.ad_info}>
                <h3 className={styles.ad_info_title}>{item.title}</h3>
                <p className={styles.ad_info_text}>{item.text}</p>
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
                  {item.studio && <div className={styles.image_info_studio}><img src={camera} alt="" /><p className={styles.image_info_studio_name}>{item.studio}</p></div>}
                </div>
                  <p className={styles.image_info_partyName}>{item.partyName}</p>
                <div className={styles.image_info_footer}>
                  <div className={styles.image_info_number}>
                    <div className={styles.image_info_views}>
                      <img src={eye} alt="" />
                      <p className={styles.image_info_views_number}>{item.views}</p>
                    </div>
                    <div className={styles.image_info_photos}>
                      <img src={pic} alt="" />
                      <p className={styles.image_info_photos_number}>{item.photos}</p>
                    </div>
                  </div>
                  <span className={styles.image_info_date}>{item.date}</span>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default ImagesList;

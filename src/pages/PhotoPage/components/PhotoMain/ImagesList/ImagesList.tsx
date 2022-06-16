import React, { FC } from "react";
import { IPhotos } from "../interfaces";
import styles from "./ImagesList.module.css";
import eye from '../../../../../assets/photoPageImages/icons/eye.svg'
import pic from '../../../../../assets/photoPageImages/icons/pic.svg'
import star from '../../../../../assets/photoPageImages/icons/star.svg'


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
          <div className={styles.image_info}>
            {item.ad ? (
              <>
                <h3 className={styles.advertise_info_title}>{item.title}</h3>
                <p className={styles.advertise_info_text}>{item.text}</p>
                <div className={styles.advertise_info_icon}>
                  <img
                    src={star}
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <h4 className={styles.image_info_title}>{item.name}</h4>
                <p className={styles.image_info_partyName}>{item.partyName}</p>
                <div className={styles.image_info_footer}>
                  <span className={styles.image_info_views}>
                    <img
                      src={eye}
                      alt=""
                    />
                    {item.views}
                  </span>
                  <span className={styles.image_info_photos}>
                    <img
                      src={pic}
                      alt=""
                    />
                    {item.photos}
                  </span>
                  <span className={styles.image_info_date}>{item.date}</span>
                </div>
              </>
            )}
          </div>
        </div>

        // <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </>
  );
};

export default ImagesList;

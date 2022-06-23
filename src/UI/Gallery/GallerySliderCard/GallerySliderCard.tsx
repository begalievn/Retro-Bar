import React, { FC } from "react";
import styles from "./GallerySliderCard.module.css";
import logo from "../../../assets/photoPageImages/gallery-images/logo.png";
import border from "../../../assets/photoPageImages/gallery-images/vinyl-cover.png";
import { IPhotos } from "../../../pages/PhotoPage/components/PhotoMain/interfaces";
interface GallerySliderCardProps {
  image: string;
}
const GallerySliderCard: FC<GallerySliderCardProps> = ({ image }) => {
  return (
    <>
      <img src={logo} id={styles.slider_card_logo} alt="" />
      <div className={styles.slider_card_border}>
        <img src={border} alt="" />
      </div>
      <div className={styles.slider_card_image}>
        <img id={styles.slider_card_img} src={image} alt="" />
      </div>
    </>
  );
};

export default GallerySliderCard;

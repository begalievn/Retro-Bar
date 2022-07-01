import React, { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import close from '../../../assets/photoPageImages/gallery-images/close.svg';

import styles from './GallerySlider.module.css';
import { IPhotos } from '../../../pages/PhotoPage/components/PhotoMain/interfaces';
import VideoCard from '../../VideoCard/VideoCard';
import GallerySliderCard from '../GallerySliderCard/GallerySliderCard';
import DownloadButton from '../Butttons/DownloadButton/DownloadButton';
import ShareButton from '../Butttons/ShareButton/ShareButton';

interface GallerySliderProps {
  currentEvent: IPhotos;
  toggleGalleryModal: () => void;
}

const GallerySlider: FC<GallerySliderProps> = ({
  currentEvent,
  toggleGalleryModal,
}) => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider_card_header}>
        <div className={styles.slider_card_header_info}>
          <h3 className={styles.slider_card_header_title}>
            {currentEvent.name}
          </h3>
          <h4 className={styles.slider_card_header_partyName}>
            {currentEvent.partyName}
          </h4>
        </div>
        <button
          onClick={toggleGalleryModal}
          className={styles.slider_card_close_btn}
        >
          <img src={close} alt="" />
        </button>
      </div>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        {currentEvent.images?.map((image, i) => (
          <>
            <SwiperSlide className={styles.slide} key={i}>
              <GallerySliderCard image={image.image} />
              <div className={styles.slider_buttons}>
                <ShareButton image={image.image} />
                <DownloadButton image={image.image} />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;

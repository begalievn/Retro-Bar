import React, { FC, useRef } from "react";

import classes from "./Slider.module.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import video from "../../../../assets/videoPage/video.png";
import video1 from "../../../../assets/videoPage/video1.png";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { VideoCard } from "../../../../UI";

import { IVideoCardBody } from "../../../../types/videoPageTypes/videoPage";

interface sliderProps {
  className?: string;
  slides?: number;
  images: IVideoCardBody[];
}

const Slider: FC<sliderProps> = ({ className, slides = 2, images }) => {
  return (
    <div className={classes.mainPlayer}>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: slides || 2,
          },
        }}
        className={className}
        slidesPerView={slides}
        spaceBetween={40}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {images.map((item: IVideoCardBody) => {
          return (
            <SwiperSlide className={classes.slide} key={item.views}>
              <VideoCard videoCardBody={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;

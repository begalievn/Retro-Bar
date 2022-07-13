import React, { FC, useRef } from "react";
import { Navigation, Pagination,Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles.css";
import classes from "./Slider.module.css";
import { VideoCard } from "../../../../UI";
import { IVideoCardBody } from "../../../../types/videoPageTypes/videoPage";

interface sliderProps {
  className?: string;
  slides?: number;
  images: IVideoCardBody[];
 setMainVideo: (event: string) => void
}

const Slider: FC<sliderProps> = ({ className, slides = 2, images,setMainVideo }) => {
    console.log(slides);

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
        slidesPerView={slides || 2}
        spaceBetween={40}
        loop={true}
        navigation={true}
        freeMode={true}
        modules={[Pagination, Navigation,Controller]}
      >
        {images?.map((item: IVideoCardBody) => {
          return (
            <SwiperSlide className={classes.slide} key={item.views}>
              <VideoCard videoCardBody={item} setMainVideo={setMainVideo} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;

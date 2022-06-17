import React, { useRef } from "react";

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

const Slider = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const images = [
    {
      image: video,
    },
    {
      image: video1,
    },
    {
      image: video,
    },
    {
      image: video1,
    },
  ];

  const slides = [];
  for (let i = 0; i < images.length; i += 1) {
    slides.push(
      <SwiperSlide className={classes.slide} key={i}>
        <img src={images[i].image} alt={`${i}`} />
      </SwiperSlide>
    );
  }
  return (
    <div className={classes.mainPlayer}>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Slider;

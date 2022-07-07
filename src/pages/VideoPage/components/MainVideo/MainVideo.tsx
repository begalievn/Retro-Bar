import React, { useEffect, useRef, useState } from "react";

import classes from "./MainVideo.module.css";
import Slider from "../Slider/Slider";
import video from "../../../../assets/videoPage/video.png";
import video1 from "../../../../assets/videoPage/video1.png";
import { IVideoCardBody } from "../../../../types/videoPageTypes/videoPage";
import { CalendarIcon, CalendarModal } from "../../../../UI";

const images: IVideoCardBody[] = [
  {
    title: "SUZIE WONG / OPENING | MOT",
    image: video,
    views: 1100,
  },
  { title: "SUZIE WONG / OPENING | MOT", image: video1, views: 1200 },
  { title: "SUZIE WONG / OPENING | MOT", image: video, views: 1300 },
  { title: "SUZIE WONG / OPENING | MOT", image: video1, views: 1400 },
];
import { videoAPI } from "../../../../store/features/videos/videoQuery";

const MainVideo = () => {
  const {
    data: photos,
    error,
    isLoading,
    refetch,
  } = videoAPI.useFetchAllVideosQuery("");

  const images: IVideoCardBody[] = [
    {
      title: "SUZIE WONG / OPENING | MOT",
      image: video,
      views: 1100,
    },
    { title: "SUZIE WONG / OPENING | MOT", image: video1, views: 1200 },
    { title: "SUZIE WONG / OPENING | MOT", image: video, views: 1300 },
    { title: "SUZIE WONG / OPENING | MOT", image: video1, views: 1400 },
  ];
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <section className={classes.videoPlayerSection}>
      <div className={classes.videoPlayer}>
        <iframe
          width="800"
          height="400"
          src={photos?.photographers[0]?.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={classes.sliderBlock}>
        <h3 className={classes.title}>1 мая 2022</h3>
        <Slider images={images} />
      </div>
      <i className={classes.calendar} onClick={toggleModal} />
      <i className={classes.star} />
      <i className={classes.stars} />

      <div className={classes.sliderBlock}>
        <h3 className={classes.title}>24 мая 2022</h3>
        <Slider className={classes.slider} slides={3} images={images} />
      </div>

      <div className={classes.sliderBlock}>
        <h3 className={classes.title}>15 марта 2022</h3>
        <Slider images={images} />
      </div>
      {modal && <CalendarModal modal={modal} toggleModal={toggleModal} />}
    </section>
  );
};

export default MainVideo;

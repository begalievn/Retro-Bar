import React, { useEffect, useRef, useState } from "react";

import classes from "./MainVideo.module.css";
import mainClasses from "../../VideoPage.module.css";
import Slider from "../Slider/Slider";
import VideoCard from "../../../../UI/VideoCard/VideoCard";
import video from "../../../../assets/videoPage/video.png";
import video1 from "../../../../assets/videoPage/video1.png";
import {IVideoCardBody} from "../../../../types/videoPageTypes/videoPage";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";


const MainVideo = () => {
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

  return (
    <section className={classes.videoPlayerSection}>
      <div className={classes.videoPlayer}>
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/uF2bHOPOY6Y"
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
      <div className={classes.sliderBlock}>
        <h3 className={classes.title}>24 мая 2022</h3>
        <Slider className={classes.slider} slides={3} images={images} />
      </div>

      <div className={classes.sliderBlock}>
        <h3 className={classes.title}>15 марта 2022</h3>
        <Slider images={images} />
      </div>

      <i className={classes.calendar} />
    </section>
  );
};

export default MainVideo;

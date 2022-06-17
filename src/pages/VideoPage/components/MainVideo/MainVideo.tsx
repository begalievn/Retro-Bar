import React, { useRef, useState } from "react";

import classes from "./MainVideo.module.css";
import mainClasses from "../../VideoPage.module.css";
import Slider from "../Slider/Slider";

const MainVideo = () => {
  return (
    <section className={classes.videoPlayerSection}>
      <div className={mainClasses.container}>
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
          <Slider />
        </div>
      </div>
      <i className={classes.calendar} />
    </section>
  );
};

export default MainVideo;

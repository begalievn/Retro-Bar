import React from "react";

import classes from "./VideoPage.module.css";
import { Hero, MainVideo } from "./components";

const VideoPage = () => {
  return (
    <div className={classes.videos}>
      <Hero />
      <MainVideo />
    </div>
  );
};

export default VideoPage;

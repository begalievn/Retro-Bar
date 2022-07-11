import React from "react";

import classes from "./VideoPage.module.css";
import { Hero, MainVideo } from "./components";
import { FooterEmoji } from "../../UI";

const VideoPage = () => {
  return (
    <div className={classes.videos}>
      <Hero />
      <MainVideo />
      <FooterEmoji />
    </div>
  );
};

export default VideoPage;

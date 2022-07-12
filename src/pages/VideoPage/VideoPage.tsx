import React from "react";

import classes from "./VideoPage.module.css";
import { Hero, MainVideo } from "./components";
import BottomEmojis from "../../UI/BottomEmojis/BottomEmojis";

const VideoPage = () => {
  return (
    <div className={classes.videos}>
      <Hero />
      <MainVideo />
      <BottomEmojis />
    </div>
  );
};

export default VideoPage;

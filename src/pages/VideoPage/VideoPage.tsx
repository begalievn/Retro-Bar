import React from "react";

import classes from "./VideoPage.module.css";
import {someClasses} from "../../utils/someClasses";

const VideoPage = () => {
  return (
    <section className={classes.hero}>

      <div className={`${classes.container} ${classes.shootContainer}`}>
          <div className={classes.shootBlock}>
            <h3></h3>
              <p></p>
              <button></button>
          </div>
      </div>
    </section>
  );
};

export default VideoPage;

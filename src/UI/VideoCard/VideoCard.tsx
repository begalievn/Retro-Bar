import React, { FC } from "react";

import classes from "./VideoCard.module.css";
import { ReactComponent as PlayIcon } from "../../assets/videoPage/playIcon.svg";
import { IVideoCardBody } from "../../types/videoPageTypes/videoPage";

interface videoCardProps {
  videoCardBody: IVideoCardBody;
}

const VideoCard: FC<videoCardProps> = ({ videoCardBody }) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardBody}>
        <i className={classes.cardPlayIcon}>
          <PlayIcon />
        </i>
        <img src={videoCardBody.image} alt={`${videoCardBody.title}`} />
        <div className={classes.videoPlayer}>
      </div>
        <div className={classes.cardText}>
          <span className={classes.cardViewers}>{videoCardBody.views}</span>
          <h4 className={classes.cardTitle}>{videoCardBody.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

import React, { FC, useEffect } from 'react';

import classes from './VideoCard.module.css';
import { ReactComponent as PlayIcon } from '../../assets/videoPage/playIcon.svg';
import { IVideoCardBody } from '../../types/videoPageTypes/videoPage';

interface videoCardProps {
  videoCardBody: IVideoCardBody;
  setMainVideo: (event: string) => void;
}

const VideoCard: FC<videoCardProps> = ({ videoCardBody, setMainVideo }) => {
  const funcScroll = () => {
    setMainVideo(videoCardBody.url!);
    window.scrollTo({ top: 600, left: 0 });
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardBody}>
        <i className={classes.cardPlayIcon}>
          <PlayIcon />
        </i>
        <img
          onClick={() => funcScroll()}
          src={videoCardBody.video}
          alt={`${videoCardBody.title}`}
        />
        <div className={classes.videoPlayer}></div>
        <div className={classes.cardText}>
          <span className={classes.cardViewers}>{videoCardBody.views}</span>
          <h4 className={classes.cardTitle}>{videoCardBody.eventName}</h4>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { videoAPI } from "../../../../../../store/features/videos/videoQuery";
import { IVideo } from "../../../../../../types/apiTypes/video";
import LinkNavs from "../../components/LinkNavs";
import VideoEditCard from "./components/VideoEditCard";
import classes from './style.module.css'

const VideoEditPage = () => {
  const {
    data: videos,
    error,
    isLoading,
    refetch,
  } = videoAPI.useFetchAllVideosQuery('');
  let array = videos?.videos;
  return (
    <div>
        <LinkNavs/>
        <div className={classes.cardDiv}>
        {array?.map((item: IVideo) => (
          <VideoEditCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default VideoEditPage;

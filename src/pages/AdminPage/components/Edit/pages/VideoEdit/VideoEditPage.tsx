import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { videoAPI } from "../../../../../../store/features/videos/videoQuery";
import { IVideo } from "../../../../../../types/apiTypes/video";
import Loader from "../../../../../../UI/Loader/Loader";
import LinkNavs from "../../components/LinkNavs";
import VideoEditCard from "./components/VideoEditCard";
import classes from "./style.module.css";

const VideoEditPage = () => {
  const {
    data: videos,
    error,
    isLoading,
    refetch,
  } = videoAPI.useFetchAllVideosQuery("");
  const array: IVideo[] = videos?.videos;
  return (
    <div>
      <LinkNavs />
      <div className={classes.cardDiv}>
        {isLoading && <Loader/>}
        {array?.map((item: IVideo) => (
          <VideoEditCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default VideoEditPage;

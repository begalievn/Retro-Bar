import React, { useEffect, useRef, useState } from "react";

import classes from "./MainVideo.module.css";
import Slider from "../Slider/Slider";
import { CalendarModal, FooterEmoji } from "../../../../UI";

import { videoAPI } from "../../../../store/features/videos/videoQuery";
import Loader from "../../../../UI/Loader/Loader";

const MainVideo = () => {
  const {
    data: videos,
    error,
    isLoading,
  } = videoAPI.useFetchAllVideosQuery("");

  const [modal, setModal] = React.useState(false);
  const toggleModal = () => setModal(!modal);
  const [mainVideo, setMainVideo] = useState<string>("");
  const [link, setLink] = useState<string[]>([]);

  useEffect(() => {
    if (!mainVideo) {
      setMainVideo(videos?.videos[0]?.url);
    }
    if (mainVideo?.length > 0) {
      setLink(mainVideo?.split("/"));
    }
  }, [videos, mainVideo]);

  return (
    <>
      <section className={classes.videoPlayerSection}>
        <div className={classes.videoPlayer}>
          {isLoading ? (
            <Loader />
          ) : (
            mainVideo &&
            link && (
              <iframe
                width="800"
                height="400"
                src={`https://www.youtube.com/embed/${link[3]}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          )}
          {error && <p>Error</p>}
        </div>
        {videos && (
          <div className={classes.mainSliderBlock}>
            <div className={classes.sliderBlock}>
              <h3 className={classes.title}>1 мая 2022</h3>
              <Slider slides={2} setMainVideo={setMainVideo} images={videos?.videos} />
            </div>
            <i className={classes.calendar} onClick={toggleModal} />
            <i className={classes.star} />
            <i className={classes.stars} />

            <div className={classes.sliderBlock}>
              <h3 className={classes.title}>24 мая 2022</h3>
              <Slider
                setMainVideo={setMainVideo}
                className={classes.slider}
                slides={videos?.videos.length > 2 ? 3 : 2}
                images={videos?.videos}
              />
            </div>

            <div className={classes.sliderBlock}>
              <h3 className={classes.title}>15 марта 2022</h3>
              <Slider slides={2} setMainVideo={setMainVideo} images={videos?.videos} />
            </div>
          </div>
        )}
        {modal && <CalendarModal modal={modal} toggleModal={toggleModal} />}
      </section>
    </>
  );
};

export default MainVideo;

import React, { FC } from "react";
import PhotoReport from "./PhotoReport/PhotoReport";
import eventPlace from "../../../../../assets/photoPageImages/main-images/parkEventplace.png";
import zeppelinBar from "../../../../../assets/photoPageImages/main-images/zeppelinBar.png";
import kipishBar from "../../../../../assets/photoPageImages/main-images/kipishBar.png";
import attention from "../../../../../assets/photoPageImages/main-images/attention.png";
import munchenPub from "../../../../../assets/photoPageImages/main-images/munchenPub.png";
import pintaPub from "../../../../../assets/photoPageImages/main-images/pintaPub.png";
import effect from "../../../../../assets/photoPageImages/main-images/effect.png";
import mamaRada from "../../../../../assets/photoPageImages/main-images/mamaRada.png";
import secretMusicHall from "../../../../../assets/photoPageImages/main-images/secretMusicHall.png";
import molecula from "../../../../../assets/photoPageImages/main-images/molecula.png";
import oblaco53 from "../../../../../assets/photoPageImages/main-images/oblaco53.png";
import pablo from "../../../../../assets/photoPageImages/main-images/pablo.png";

const photos: Array<HTMLImageElement> = [
  eventPlace,
  zeppelinBar,
  kipishBar,
  attention,
  munchenPub,
  pintaPub,
  effect,
  mamaRada,
  secretMusicHall,
  molecula,
  oblaco53,
  pablo,
];

const Main: FC = () => {
  return (
    <>
      {photos.map((item, index) => (
        <PhotoReport key={index} link={item} />
      ))}
    </>
  );
};

export default Main;

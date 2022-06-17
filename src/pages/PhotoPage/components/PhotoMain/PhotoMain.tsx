import React, { FC } from "react";
import PhotoReport from "./PhotoReport/PhotoReport";
import styles from "./PhotoMain.module.css";
import lightning from "../../../../assets/icons/lightning.svg";

// const photos: Array<HTMLImageElement> = [
//   eventPlace,
//   zeppelinBar,
//   kipishBar,
//   attention,
//   munchenPub,
//   pintaPub,
//   effect,
//   mamaRada,
//   secretMusicHall,
//   molecula,
//   oblaco53,
//   pablo,
// ];

const Main: FC = () => {
  return (
    <div className={styles.photoMain}>
      <div className={styles.photoMain_intro}>
        <h3 className={styles.photoMain_intro_title}>Актуальные фотоотчёты</h3>
        <img className={styles.photoMain_intro_img} src={lightning} alt="" />
      </div>
      <div className={styles.gridBlocks}>
        <PhotoReport />
      </div>
    </div>
  );
};

export default Main;

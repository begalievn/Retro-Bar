import React, { FC } from "react";
import PhotoReport from "./PhotoReport/PhotoReport";
import styles from "./PhotoMain.module.css";

const Main: FC = () => {
  return (
    <div className={styles.photoMain}>
        <h3 className={styles.photoMain_title}>Актуальные фотоотчёты</h3>
      <div className={styles.gridBlocks}>
        <PhotoReport />
      </div>
    </div>
  );
};

export default Main;

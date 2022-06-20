import React, { FC } from "react";
import backgroundPaper from "../../../../assets/institutionBarImg/back/backgroundPaper.png";
import classes from "./Paper.module.css";
import { PaperBottom } from "./PaperBottom";
import { PaperTop } from "./PaperTop";
const Paper: FC = () => {
  return (
    <div className={classes.paperComponent}>
      <img
        src={backgroundPaper}
        width="100%"
        className={classes.backgroundPaper}
      />
      <div className={classes.photoDiv}>
        <h1 className={classes.h1p}>Репортажи</h1>
        <PaperBottom />
        <PaperTop />
      </div>
    </div>
  );
};
export { Paper };

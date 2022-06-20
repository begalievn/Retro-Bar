import React, { FC, useEffect, useState } from "react";
import classes from "./Paper.module.css";
import polaroidMini from "../../../../assets/institutionBarImg/photo/polaroidMini.png";
import top1 from "../../../../assets/institutionBarImg/photo/top1.png";
import top2 from "../../../../assets/institutionBarImg/photo/top2.png";
import top3 from "../../../../assets/institutionBarImg/photo/top3.png";
import { Grid } from "@mui/material";

const PaperTop: FC = () => {
  let carousel = [top1, top2, top3];

  const [photos, setPhotos] = useState(1);
  let counter = 0;

  const handleLast = () => {
    console.log();
    // setPhotos(carousel[photos - 1]);
  };
  const handleNext = () => {
    // setPhotos(carousel[photos + 1]);
  };
  return (
    <div>
      <div className={classes.topWeb}>
        <p className={classes.hp}>24 мая 2022</p>
        <Grid container spacing={3} className={classes.top}>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="61%" className={classes.frame1} />
            <img src={top1} width="19%" className={classes.fr1} />
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="60%" className={classes.frame2} />
            <img src={top2} width="19%" className={classes.fr2} />
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="59%" className={classes.frame3} />
            <img src={top3} width="19%" className={classes.fr3} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.topMobile}>
        <button onClick={() => handleLast()}>L</button>
        <img src={polaroidMini} width="55%" />
        {/* <img src={photos} width="53%" className={classes.photoPaste} /> */}
        <button onClick={() => handleNext()}>N</button>
      </div>
    </div>
  );
};
export { PaperTop };

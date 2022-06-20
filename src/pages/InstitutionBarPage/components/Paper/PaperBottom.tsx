import React, { FC } from "react";
import polaroidMini from "../../../../assets/institutionBarImg/photo/polaroidMini.png";
import bottom1 from "../../../../assets/institutionBarImg/photo/bottom1.png";
import bottom2 from "../../../../assets/institutionBarImg/photo/bottom2.png";
import bottom3 from "../../../../assets/institutionBarImg/photo/bottom3.png";
import { Grid } from "@mui/material";
import classes from "./Paper.module.css";
const PaperBottom: FC = () => {
  return (
    <div>
      <div className={classes.bottomWeb}>
        <p className={classes.hp}>15 марта 2022</p>
        <Grid container spacing={3} className={classes.bottom}>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="61%" className={classes.frame1} />
            <img src={bottom1} width="19%" className={classes.fr1} />
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="60%" className={classes.frame2} />
            <img src={bottom2} width="19%" className={classes.fr2} />
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="60%" className={classes.frame3} />
            <img src={bottom3} width="19%" className={classes.fr3} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.bottomMobile}>
        <button>L</button>
        <img src={polaroidMini} width="55%" />
        <button>N</button>
      </div>
    </div>
  );
};
export { PaperBottom };

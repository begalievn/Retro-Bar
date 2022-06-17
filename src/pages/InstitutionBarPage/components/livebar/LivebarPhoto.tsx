import React, { FC } from "react";
import { Grid } from "@mui/material";


import photoMain from "../../../../assets/institutionBarImg/photo/photoMain.png";
import effectMain from "../../../../assets/institutionBarImg/photo/effectMain.png";
import polaroidMain1 from "../../../../assets/institutionBarImg/iconLiveBar/polaroidMain1.png";
import classes from "./Livebar.module.css";

const LivebarPhoto: FC = () => {
  return (
    <Grid item xs={12} md={7}>
      <section>
        <article>
          <img
            src={polaroidMain1}
            width="45%"
            className={classes.polaroidMainLivebar}
          />
          <img src={photoMain} width="33%" className={classes.mainPhoto} />
          <img src={effectMain} width="55%" className={classes.mainPhoto} />
        </article>
        {/* <article className={barStyle.photosAll}>
            <div className={barStyle.photo1}>
              <img
              src={miniPhoto1}
              width="115px"
              className={barStyle.miniPhoto1}
            />
            </div>
            <div className={barStyle.photo2}></div>
            <div className={barStyle.photo3}></div>
            <div className={barStyle.photo4}></div>
          </article> */}
      </section>
    </Grid>
  );
};
export { LivebarPhoto };

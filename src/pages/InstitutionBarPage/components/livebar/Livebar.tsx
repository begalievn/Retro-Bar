import React, { FC } from "react";
import { LivebarPhoto } from "./LivebarPhoto";
import { LivebarText } from "./LivebarText";
import { Grid } from "@mui/material";
import classes from "./Livebar.module.css";
import { Map } from "./Map";

const LiveBarTS: FC = () => {
  return (
    <div>
      <Grid container spacing={2} className={classes.livebarContainer}>
        <Grid item xs={12} md={6}>
          <LivebarText />
        </Grid>
        <Grid item xs={12} md={6}>
          <LivebarPhoto />
        </Grid>
      </Grid>
      <Map />
    </div>
  );
};
export default LiveBarTS;

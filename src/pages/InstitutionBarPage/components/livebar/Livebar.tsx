import { FC } from "react";
import { LivebarPhoto } from "./LivebarPhoto";
import { LivebarText } from "./LivebarText";
import { Grid } from "@mui/material";
import classes from "./Livebar.module.css";
import { Map } from "./Map";
import { MapText } from "./MapText";

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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item xs={12} md={6}>
          <MapText />
        </Grid>
      </Grid>
    </div>
  );
};
export default LiveBarTS;

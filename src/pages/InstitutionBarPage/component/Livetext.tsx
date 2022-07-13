import { FC, useState } from "react";
import classes from "./livebarstyle.module.css";
import { Grid } from "@mui/material";
import livebar from "../../../assets/institutionBarImg/iconLiveBar/livebar.png";
import event from "../../../assets/institutionBarImg/iconLiveBar/events.svg";
import picture from "../../../assets/institutionBarImg/iconLiveBar/picture.svg";
import rating from "../../../assets/institutionBarImg/iconLiveBar/rating.svg";
import share from "../../../assets/institutionBarImg/iconLiveBar/share.svg";
import { ShareSocial } from "../shareSocial";
import { IEstablishment } from "../../../types/apiTypes/establishment";

type ILiveTextProps = {
  name: string;
  data: IEstablishment
};
const LiveText = ({ name,data }: ILiveTextProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className={classes.text}>
      <Grid container className={classes.livebarLetfTop}>
        <Grid item xs={4} md={3}>
          <img src={livebar} width="100%" />
        </Grid>
        <Grid item xs={8} md={9} className={classes.livebar}>
          <Grid container spacing={3}>
            <Grid item xs={10} md={6}>
              <p className={classes.livebarHeader}>{name}</p>
              <div className={classes.comments}>
                <img src={picture} />
                <p>150</p>
                <img src={event} />
                <p>2</p>
              </div>
            </Grid>
            <img src={rating} className={classes.rating} />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className={classes.shareMobile}
            >
              <img src={share} width="14px" />
            </button>
          </Grid>
          {show && (
            <div className={classes.socialList}>
              <ShareSocial />
            </div>
          )}
        </Grid>
      </Grid>
      <div className={classes.livebarLetfBottom}>
        {data.description}

      </div>
    </div>
  );
};
export { LiveText };

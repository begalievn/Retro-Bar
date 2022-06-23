import React, { FC } from "react";
import { Grid } from "@mui/material";
import classes from "./institutionBar.module.css";
import LiveBarTS from "./components/livebar/Livebar";
import { Paper } from "./components/Paper/Paper";
import { FooterEmoji } from "../../UI/FooterEmoji/FooterEmoji";
import share from "../../assets/institutionBarImg/iconLiveBar/share.svg";
// import emoji from "../../assets/institutionBarImg/iconsMap/emoji.svg";
// import arrowUp from "../../assets/institutionBarImg/iconsMap/arrowUp.svg";
const InstitutionBarPage: FC = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.main_gradient}>
        <article className={classes.text_flex}>
          <header className={classes.text_header}>Заведения/LIVEBAR</header>
          <p className={classes.share}>
            Поделиться
            <img src={share} className={classes.shareIcon} />
          </p>
        </article>
        <LiveBarTS />
      </div>
      <div className={classes.paper}>
        <Paper />
      </div>
      <FooterEmoji />
      {/* <div className={classes.emoji}>
        <img src={emoji} />
      </div>
      <div className={classes.arrowUp}>
        <img src={arrowUp} />
      </div> */}
    </div>
  );
};

export default InstitutionBarPage;

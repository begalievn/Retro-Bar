import React, { FC } from "react";
import emoji from "../../assets/institutionBarImg/iconsMap/emoji.svg";
import arrowUp from "../../assets/institutionBarImg/iconsMap/arrowUp.svg";
import classes from "./FooterEmoji.module.css";
const FooterEmoji: FC = () => {
  return (
    <>
      <div className={classes.emoji}>
        <img src={emoji} width="15%" />
      </div>
      <div className={classes.arrowUp}>
        <img src={arrowUp} width="9%"/>
      </div>
    </>
  );
};
export { FooterEmoji };

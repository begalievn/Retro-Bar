import React, { FC } from "react";
import emoji from "../../assets/institutionBarImg/iconsMap/emoji.svg";
import arrowUp from "../../assets/institutionBarImg/iconsMap/arrowUp.svg";
import classes from "./FooterEmoji.module.css";
const FooterEmoji: FC = () => {
  return (
    <>
      <div className={classes.emoji}>
        <img src={emoji} />
      </div>
      <div className={classes.arrowUp}>
        <img src={arrowUp} />
      </div>
    </>
  );
};
export { FooterEmoji };

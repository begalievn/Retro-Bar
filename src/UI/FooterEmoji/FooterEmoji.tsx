import { FC } from "react";
import emoji from "../../assets/institutionBarImg/iconsMap/emoji.svg";
import arrowUp from "../../assets/institutionBarImg/iconsMap/arrowUp.svg";
import classes from "./FooterEmoji.module.css";
const FooterEmoji: FC = () => {

  const ToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div className={classes.emoji}>
        <img src={emoji}  width="15%" />
      </div>
      <div className={classes.arrowUp}>
        <img src={arrowUp} onClick={()=>ToTop()} width="5%" />
      </div>
    </>
  );
};
export { FooterEmoji };

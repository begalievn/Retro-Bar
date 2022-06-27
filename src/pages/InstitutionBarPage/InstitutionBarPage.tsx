import { FC } from "react";
import classes from "./institutionBar.module.css";
import LiveBarTS from "./components/livebar/Livebar";
import { Paper } from "./components/Paper/Paper";
import { FooterEmoji } from "../../UI/FooterEmoji/FooterEmoji";
import share from "../../assets/institutionBarImg/iconLiveBar/share.svg";
import CalendarIcon from "../../UI/CalendarIcon/CalendarIcon";

const InstitutionBarPage: FC = () => {
  return (
    <div className={classes.mainContainer}>
      <CalendarIcon />
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
    </div>
  );
};

export default InstitutionBarPage;

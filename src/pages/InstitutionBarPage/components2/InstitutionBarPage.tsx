import { FC } from "react";
import classes from "./instititebar.module.css";
import share from "../../../assets/institutionBarImg/iconLiveBar/share.svg";
import { LiveText } from "./Livetext";
import { LivePhoto } from "./LivePhoto";
import map from "../../../assets/institutionBarImg/photo/map.png";
import cycle from "../../../assets/institutionBarImg/iconsMap/sketch.svg";
import clock from "../../../assets/institutionBarImg/iconsMap/clock.svg";
import money from "../../../assets/institutionBarImg/iconsMap/money.svg";
import dish from "../../../assets/institutionBarImg/iconsMap/dish.svg";
import world from "../../../assets/institutionBarImg/iconsMap/meaning.svg";
import instagram from "../../../assets/institutionBarImg/iconsMap/instagram.svg";
import geotag from "../../../assets/institutionBarImg/iconsMap/geotag.svg";
import phone from "../../../assets/institutionBarImg/iconsMap/phone.svg";
import bigStar from "../../../assets/institutionBarImg/iconLiveBar/bigStar.svg";
import backgroundPaper from "../../../assets/institutionBarImg/back/backgroundPaper.png";
import BottomEmojis from "../../../UI/BottomEmojis/BottomEmojis";
import { PaperNew } from "./PaperNew";
const InstituteBar: FC = () => {
  const description = [
    { img: clock, text: "18:00-06:00" },
    { img: money, text: "Средний чек: 1000 сом" },
    { img: dish, text: "Европейская кухня" },
    { img: world, text: "Ночной клуб, караоке" },
  ];
  return (
    <div className={classes.mainContainer}>
      {/* <div className={classes.mainGradient}> */}
      <div className={classes.gridPosition}>
        <header className={classes.text_header}>Заведения/LIVEBAR</header>
        <p className={classes.share}>
          Поделиться
          <img src={share} className={classes.shareIcon} />
        </p>
        <div className={classes.liveText}>
          <LiveText />
        </div>
        <div className={classes.livePhoto}>
          <LivePhoto />
        </div>
        <div className={classes.mapPhoto}>
          <a
            className="dg-widget-link"
            href="http://2gis.kg/bishkek/firm/70000001019346367/center/74.61690902709962,42.85834982271733/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
          >
            <img src={map} className={classes.mapImage} />
          </a>
        </div>
        <div className={classes.mapText}>
          <div>
            <img src={cycle} alt="" className={classes.cycle} />
            <h1 className={classes.header}>Описание:</h1>
          </div>
          <img src={bigStar} className={classes.bigStar} />
          {description.map((el) => (
            <p>
              <img src={el.img} /> {el.text}
            </p>
          ))}
          <h1>Контакты:</h1>
          <div className={classes.bigStar}></div>

          <a href="https://www.instagram.com/livebarkg/">
            <p>
              <img src={instagram} /> livebar.kg
            </p>
          </a>
          <p>
            <img src={phone} />0 558 55 00 00
          </p>
          <p>
            <img src={geotag} />
            ТЦ «МОТО» 5 этаж (Токтогула Советская)
          </p>
          <p>
            <img src={phone} />
            0557 594999
          </p>
          <p>
            <img src={geotag} />
            Ул. Кулатова 8/1 LiveBar Coolatova
          </p>
        </div>

        {/* <div className={classes.paper}>
            <PaperNew />
          </div> */}
        {/* </div> */}
      </div>
      {/* <BottomEmojis /> */}
    </div>
  );
};

export default InstituteBar;

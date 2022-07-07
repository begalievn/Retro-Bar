import { FC, useState } from "react";
import classes from "./institutionBar.module.css";
import share from "../../assets/institutionBarImg/iconLiveBar/share.svg";
import { LiveText } from "./component/Livetext";
import { LivePhoto } from "./component/LivePhoto";
import map from "../../assets/institutionBarImg/photo/map.png";
import cycle from "../../assets/institutionBarImg/iconsMap/sketch.svg";
import clock from "../../assets/institutionBarImg/iconsMap/clock.svg";
import money from "../../assets/institutionBarImg/iconsMap/money.svg";
import dish from "../../assets/institutionBarImg/iconsMap/dish.svg";
import world from "../../assets/institutionBarImg/iconsMap/meaning.svg";
import instagram from "../../assets/institutionBarImg/iconsMap/instagram.svg";
import geotag from "../../assets/institutionBarImg/iconsMap/geotag.svg";
import phone from "../../assets/institutionBarImg/iconsMap/phone.svg";
import bigStar from "../../assets/institutionBarImg/iconLiveBar/bigStar.svg";
import BottomEmojis from "../../UI/BottomEmojis/BottomEmojis";
import { PaperNew } from "./component/PaperNew";
// share
import { ShareSocial } from "./shareSocial";
import { establishmentsAPI } from "../../store/features/establishments/establishmentsQuery";

import { useParams } from "react-router-dom";

const InstitutionBarPage: FC = () => {
  let { establishmentId } = useParams();

  console.log("useParams", establishmentId);

  const { data, error, isLoading } =
    establishmentsAPI.useFetchEstablishmentByIdQuery(establishmentId);

  // console.log("Institution Bar", data.contacts);

  const [show, setShow] = useState(false);

  const description = [
    { img: clock, text: "18:00-06:00" },
    { img: money, text: "Средний чек: 1000 сом" },
    { img: dish, text: "Европейская кухня" },
    { img: world, text: "Ночной клуб, караоке" },
  ];

  return (
    <div className={classes.mainContainer}>
      <div className={classes.gridPosition}>
        <header className={classes.text_header}>Заведения/LIVEBAR</header>
        <button
          type="button"
          onClick={() => setShow(!show)}
          className={classes.shareBtn}
        >
          Поделиться
          <img src={share} className={classes.shareIcon} />
          {show && <ShareSocial />}
        </button>

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
            <img src={phone} />
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
        <p className={classes.mobileTextAfterPhoto}>
          Лучше один раз увидеть, чем 100 раз прочитать или услышать! Приходите
          и ощутите уникальную ауру наших заведений!
        </p>
        <div className={classes.paper}>
          <PaperNew />
        </div>
        <div className={classes.bottomEmoji}>
          <BottomEmojis />
        </div>
      </div>
    </div>
  );
};

export { InstitutionBarPage };

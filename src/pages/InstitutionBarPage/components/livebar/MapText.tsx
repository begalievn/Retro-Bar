import React, { FC } from "react";
import cycle from "../../../../assets/institutionBarImg/iconsMap/sketch.svg";
import clock from "../../../../assets/institutionBarImg/iconsMap/clock.svg";
import money from "../../../../assets/institutionBarImg/iconsMap/money.svg";
import dish from "../../../../assets/institutionBarImg/iconsMap/dish.svg";
import world from "../../../../assets/institutionBarImg/iconsMap/meaning.svg";
import instagram from "../../../../assets/institutionBarImg/iconsMap/instagram.svg";
import geotag from "../../../../assets/institutionBarImg/iconsMap/geotag.svg";
import phone from "../../../../assets/institutionBarImg/iconsMap/phone.svg";
import classes from "./Livebar.module.css";
const MapText: FC = () => {
  return (
    <div className={classes.textMap}>
      <div>
        <img src={cycle} className={classes.circle} />
        <h1 className={classes.header}>Описание:</h1>
      </div>
      <p>
        <img src={clock} />
        18:00-06:00
      </p>
      <p>
        <img src={money} />
        Средний чек: 1000 сом
      </p>
      <p>
        <img src={dish} />
        Европейская кухня
      </p>
      <p>
        <img src={world} />
        Ночной клуб, караоке
      </p>
      <h1>Контакты:</h1>

      <a href="https://www.instagram.com/livebar/?igshid=126pohgaworso">
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
  );
};
export { MapText };

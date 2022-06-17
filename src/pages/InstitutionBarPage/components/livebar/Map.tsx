import React from "react";
import { FC } from "react";
import map from "../../../../assets/institutionBarImg/photo/map.png";
import classes from "./Livebar.module.css";
const Map: FC = () => {
  return (
    <div>
      <a
        className="dg-widget-link"
        href="http://2gis.kg/bishkek/firm/70000001019346367/center/74.61690902709962,42.85834982271733/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
      >
        <img src={map} className={classes.mapImage} />
      </a>
    </div>
  );
};
export { Map };

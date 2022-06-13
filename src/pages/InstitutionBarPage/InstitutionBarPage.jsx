import React from "react";
import barStyle from "../InstitutionBarPage/institutionBar.module.css";
import logo from "../../assets/institutionBarImg/iconLiveBar/logo.svg";
import back from "../../assets/institutionBarImg/back/back.png";
import gradientsH from "../../assets/institutionBarImg/back/gradientsH.png";
import gradientsW from "../../assets/institutionBarImg/back/gradientsW.png";
import paperDown from "../../assets/institutionBarImg/back/paperDown.png";
import Map from "./components/Map";

import LiveBar from "./components/LiveBar";

const InstitutionBarPage = () => {
  return (
    <div className={barStyle.bar_mainContainer}>
      <div className={barStyle.bar_gradient}>
        <h1>Header</h1>
        <article className={barStyle.text_flex}>
          <header className={barStyle.text_header}>Заведения/LIVEBAR</header>
          <h3 className={barStyle.share}>Поделиться</h3>
        </article>
        <LiveBar />
        <Map />
      </div>
      <div className={barStyle.paper}>
        <h1>Up content</h1>
      </div>
    </div>
  );
};

export default InstitutionBarPage;

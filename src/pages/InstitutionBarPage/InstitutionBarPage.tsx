import React, { FC } from "react";
import { Grid } from "@mui/material";
import barStyle from "../InstitutionBarPage/institutionBar.module.css";
import LiveBarTS from "./components/Livebar";
// import Map from "./components/Map";
// import LiveBar from "./components/LiveBar";
// import Paper from "./components/Paper";

const InstitutionBarPage: FC = () => {
  return (
    <div className={barStyle.bar_mainContainer}>
      <div className={barStyle.bar_gradient}>
        <article className={barStyle.text_flex}>
          <header className={barStyle.text_header}>Заведения/LIVEBAR</header>
          <h3 className={barStyle.share}>Поделиться</h3>
        </article>
        <LiveBarTS />
        {/* <Map /> */}
      </div>
      <div className={barStyle.paper}>{/* <Paper /> */}</div>
    </div>
  );
};

export default InstitutionBarPage;

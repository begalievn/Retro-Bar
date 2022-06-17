import React, { FC } from "react";
import { Grid } from "@mui/material";
import classes from "./institutionBar.module.css";
import LiveBarTS from "./components/livebar/Livebar";
// import LiveBar from "./components/LiveBar";
// import Paper from "./components/Paper";

const InstitutionBarPage: FC = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.main_gradient}>
        <article className={classes.text_flex}>
          <header className={classes.text_header}>Заведения/LIVEBAR</header>
          {/* <h3 className={classes.share}>Поделиться</h3> */}
        </article>
        <LiveBarTS />
      </div>
      <div className={classes.paper}>{/* <Paper /> */}</div>
    </div>
  );
};

export default InstitutionBarPage;

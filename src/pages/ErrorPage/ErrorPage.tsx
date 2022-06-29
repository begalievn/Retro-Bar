import React from "react";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { InputSearch } from "../../UI";
import classes from "./ErrorPage.module.css";
import tape1 from "../../assets/erroPage/tape1.png";
import tape2 from "../../assets/erroPage/tape2.png";
import polaroid from "../../assets/erroPage/polaroid.png";

const ErrorPage = () => {
  const tapes: string[] = [tape1, tape2];

  return (
    <div className={classes.mainDiv}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid
          sx={{
            display: { md: "flex", xs: "none" },
            alignItems: "center",
            textAlign: "end",
          }}
          container
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <h3 className={classes.sorryText}>
              К сожалению ничего не удалось найти
            </h3>
            <h5 className={classes.secondText}>
              Жаль, но ничего не соответствуют критериям поиска. Пожалуйста,
              попробуйте снова, изменив ключевые слова.
            </h5>
            <InputSearch placeholder="твиттер" />
            <Link to="/">
              <button className={classes.btnMain}>На главную</button>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.imgDiv}>
              <img className={classes.polaroidImg} src={polaroid} alt="" />
              {tapes.map((item) => (
                <img className={classes.tapeStyle} src={item} alt="" />
              ))}
            </div>
          </Grid>
        </Grid>
        {/* //responsive/ */}
        <Grid
          className={classes.respDiv}
          sx={{
            display: { md: "none", xs: "flex" },
            alignItems: "center",
            textAlign: "center",
          }}
          container
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <h3 className={classes.sorryText}>
              К сожалению ничего не удалось найти
            </h3>
            <h5 className={classes.secondText}>
              Жаль, но ничего не соответствуют критериям поиска. Пожалуйста,
              попробуйте снова, изменив ключевые слова.
            </h5>
            <Container className={classes.inputS}>
              <InputSearch placeholder="твиттер" />
            </Container>
            <Link to="/">
              <button className={classes.btnMain}>На главную</button>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.imgDiv}>
              <img className={classes.polaroidImg} src={polaroid} alt="" />
              {tapes.map((item) => (
                <img className={classes.tapeResp} src={item} alt="" />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ErrorPage;

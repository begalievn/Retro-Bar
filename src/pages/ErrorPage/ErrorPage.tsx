import { Container, Grid } from "@mui/material";
import React from "react";
import { Link} from "react-router-dom";
import errorImage from "../../assets/erroPage/errorPh.png";
import { InputSearch } from "../../UI";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
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
            <div>
              <img className={classes.errorImg} src={errorImage} alt="" />
            </div>
          </Grid>
        </Grid>

        <Grid
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
            <InputSearch placeholder="твиттер" />
            <Link to="/">
              <button className={classes.btnMain}>На главную</button>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <div>
              <img width="419px" src={errorImage} alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ErrorPage;

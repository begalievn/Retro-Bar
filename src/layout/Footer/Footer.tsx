import React, { useState } from "react";
import classes from "./styles.module.css";
import telegramIcon from "../../assets/icons/Footer/telegram.svg";
import instagramIcon from "../../assets/icons/Footer/instagram.svg";
import youtubeIcon from "../../assets/icons/Footer/youtube.svg";
import mailIcon from "../../assets/icons/Footer/mail.svg";
import bartIcon from "../../assets/icons/Footer/logo.svg";
import searchIcon from "../../assets/icons/Footer/Vector.svg";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { IFooterItems } from "../../typres/footerTypes/footerTypes";
import { InputSearch } from "../../UI";

const Footer = () => {
  const liElem: IFooterItems[] =[
    {
      title: "Фото",
      path: "/photo",
    },
    {
      title: "Видео",
      path: "/video",
    },
    {
      title: "Заведения",
      path: "/institution",
    },
    {
      title: "События",
      path: "/events",
    },
  ];
  const liElem2: IFooterItems[] =[
    {
      title: "Новости",
      path: "/news",
    },
    {
      title: "Контакты",
      path: "/contacts",
    },
    {
      title: "Сотрудники",
      path: "/employees",
    },
    {
      title: "Копирайт",
      path: "/copyright",
    },
  ];
  const iconsMedia =[
    {
      icon: telegramIcon,
      path: "https://web.telegram.org",
    },
    {
      icon: instagramIcon,
      path: "https://instagram.com",
    },
    {
      icon: youtubeIcon,
      path: "https://youtube.com",
    },
    {
      icon: mailIcon,
      path: "https://mail.google.com/",
    },
  ];
  const text: Array<string> =[
    "Политика конфиденциальности",
    "Copyright 2021",
    "Digital-агентство Active Trust",
  ];
  const [inputChange, setInputChange] = useState<string>("");

  function searchClick(name:string): void {
    console.log(name);
  }
  return (
    <div className={classes.main}>
      <Container sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
        <Grid item xs={12} md={12} className={classes.inside}>
          <Grid item xs={12} md={3} className={classes.blocks}>
            <Grid
              sx={{ display: { xs: "none", md: "block" } }}
              className={classes.retro}
            >
              <div className={classes.retro2}>
                <span style={{ fontFamily: "Montserrat Alternates" }}>
                  Retro
                </span>
                <img src={bartIcon} alt="" />
              </div>
            </Grid>

            <Grid
              sx={{ display: { xs: "none", md: "block" } }}
              item
              xs={12}
              className={classes.politicMD}
            >
              {text.map((item) => (
                <div>{item}</div>
              ))}
            </Grid>
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "block" } }}
            item
            xs={12}
            md={3}
            className={classes.blocks2}
          >
            {liElem.map((item) => (
              <ul style={{ width: "60%" }}>
                <Link to={item.path}>{item.title}</Link>
              </ul>
            ))}
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "block" } }}
            item
            xs={12}
            md={3}
            className={classes.blocks3}
          >
            {liElem2.map((item) => (
              <ul style={{ width: "60%" }}>
                <Link to={item.path}>{item.title}</Link>
              </ul>
            ))}
          </Grid>
          <Grid item xs={12} md={3} className={classes.blocks4}>
            <Grid
              className={classes.inputBlockMD}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <input
                onChange={(e) => {
                  setInputChange(e.target.value);
                }}
                className={classes.input}
                type="text"
                placeholder="Геолокация"
              />
              <button onClick={()=> searchClick('Beksultan')} className={classes.search}>
                <img className={classes.im} src={searchIcon} alt="" />
              </button>
              {/* <InputSearch placeholder="Геолокация"/> */}
            </Grid>

            <Grid
              sx={{ display: { xs: "none", md: "block" } }}
              item
              xs={12}
              md={12}
              className={classes.iconsBlockMD}
            >
              <h6>Мы в социальных сетях:</h6>
              <div className={classes.onlyIconsMD}>
                {iconsMedia.map((item) => (
                  <a href={item.path}>
                    <img src={item.icon} alt="" />
                  </a>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container
        className={classes.main}
        sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}
      >
        <Grid item xs={12} md={12} className={classes.inside} container>
          <Grid item xs={12} md={3} className={classes.blocks}>
            <Grid
              item
              xs={12}
              sx={{ display: { xs: "block", md: "none" }, textAlign: "center" }}
              className={classes.retro}
            >
              <div className={classes.retroMobile}>
                <span>Retro</span>
                <img src={bartIcon} alt="" />
              </div>
            </Grid>
            <Grid
              sx={{
                display: { xs: "block", md: "none" },
                margin: "0 auto",
                marginTop: "30px",
              }}
              item
              xs={12}
              className={classes.iconsBlock}
            >
              <h6>Мы в социальных сетях:</h6>
              <div className={classes.onlyIcons}>
                {iconsMedia.map((item) => (
                  <a href={item.path}>
                    <img src={item.icon} alt="" />
                  </a>
                ))}
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3} className={classes.blocks4}>
            <Grid
              sx={{
                display: { xs: "flex", md: "none", justifyContent: "center" },
              }}
            >
              <input
                onChange={(e) => {
                  setInputChange(e.target.value);
                }}
                className={classes.input}
                type="text"
                placeholder="Геолокация"
              />
              <button onClick={()=> searchClick('Beksultan')} className={classes.search}>
                <img className={classes.im} src={searchIcon} alt="" />
              </button>
              {/* <InputSearch placeholder="Геолокация"/> */}
            </Grid>
            <Grid
              sx={{
                display: { xs: "block", md: "none" },
                textAlign: "center",
                marginTop: "30px",
              }}
              item
              xs={12}
              className={classes.politic}
            >
              {text.map((item) => (
                <div>{item}</div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

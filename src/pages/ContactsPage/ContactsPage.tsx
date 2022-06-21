import React from "react";
import classes from "./style.module.css";
import mainImage from "../../assets/contactsPage/polaroid.png";
import { Container, Grid } from "@mui/material";
import img1 from "../../assets/contactsPage/carousel.png";
import img2 from "../../assets/contactsPage/carouse.png";
import img3 from "../../assets/contactsPage/carous.png";
import aboutUs from "../../assets/contactsPage/sketch.png";
import phoneIcon from "../../assets/contactsPage/phone.svg";
import whatsAppIcon from "../../assets/contactsPage/WhatsApp.svg";
import mailIcon from "../../assets/contactsPage/mail.svg";
import tape from "../../assets/contactsPage/tape.svg";

const ContactsPage = () => {
  // const images = [mainImage, img1, img2, img3];
  return (
    <div className={classes.mainDiv}>
      <Container
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          sx={{
            display: { md: "flex", xs: "none" },
            alignItems: "center",
          }}
          container
          spacing={2}
        >
          <Grid item xs={12} md={5}>
            <img width="100%" src={mainImage} alt="" />
          </Grid>
          
          <Grid className={classes.threeImg} item xs={12} md={2}>
            <img className={classes.tape} src={tape} alt="" />
            <img className={classes.tape2} src={tape} alt="" />
            <img className={classes.tape3} src={tape} alt="" />
            <img width="120" src={img1} alt="" />
            <img width="120" src={img2} alt="" />
            <img width="120" src={img3} alt="" />
          </Grid>
          <Grid sx={{ marginTop: "-100px" }} item xs={12} md={5}>
            <div className={classes.aboutText}>
              <img src={aboutUs} alt="" />
              <h1>О нас</h1>
            </div>
            <h4>
              Медиа ресурс о светской, вечерней и ночной жизни города. Место,
              куда заходят чтоб почувствовать и быть в курсе всех событий в
              культурной жизни столицы.
            </h4>
            <h3
              style={{ color: "#ffb03b", marginTop: "30px", fontSize: "20px" }}
            >
              Заказ фото/видео репортажа:
            </h3>
            <div className={classes.information}>
              <div>
                <img src={phoneIcon} alt="" />
                <span>0 558 55 00 00</span>
              </div>
              <div>
                <img src={whatsAppIcon} alt="" />
                <span>0 778 55 00 00</span>
              </div>
              <div>
                <img src={mailIcon} alt="" />
                <span>info@foodzero.com</span>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Responsive */}
        <Grid
          sx={{
            display: { md: "none", xs: "flex" },
            alignItems: "center",
            textAlign: "left",
            marginTop: "100px",
            marginBottom: "50px",
          }}
          container
          spacing={2}
        >
          <Grid item xs={12} md={5}>
            <div className={classes.aboutText}>
              <img src={aboutUs} alt="" />
              <h1>О нас</h1>
            </div>
            <h4>
              Медиа ресурс о светской, вечерней и ночной жизни города. Место,
              куда заходят чтоб почувствовать и быть в курсе всех событий в
              культурной жизни столицы.
            </h4>
          </Grid>
          <Grid item xs={12} md={5}>
            <img width="90%" src={mainImage} alt="" />
          </Grid>
          <Grid className={classes.threeImg} item xs={12} md={2}>
            {/* <img className={classes.tapeR} src={tape} alt="" /> */}

            <img width="33%" src={img1} alt="" />
            <img width="33%" src={img2} alt="" />
            <img width="33%" src={img3} alt="" />
          </Grid>
          <Grid item xs={12} md={5}>
            <h3 style={{ color: "#ffb03b", fontSize: "20px" }}>
              Заказ фото/видео репортажа:
            </h3>
            <div className={classes.information}>
              <div>
                <img src={phoneIcon} alt="" />
                <span>0 558 55 00 00</span>
              </div>
              <div>
                <img src={whatsAppIcon} alt="" />
                <span>0 778 55 00 00</span>
              </div>
              <div>
                <img src={mailIcon} alt="" />
                <span>info@foodzero.com</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactsPage;

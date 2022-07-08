import React, { FC, useEffect, useState } from "react";
import tape2 from "../../../assets/eventsImages/tape2.png";
import tape1 from "../../../assets/eventsImages/tape 1.png";

import hero from "../../../assets/eventsImages/banner ticket (2).png";
import banner from "../../../assets/eventsImages/banner (1).png";
import bannerMini from "../../../assets/eventsImages/bannerMini.jpg";
import style from "../eventPage.module.css";
import { photoAPI } from "../../../store/features/photos/photoQuery";

const navbar: Array<string> = ["Видео", "Услуги", "Плеер", "Галерея"];

const Section1: FC = () => {
  let { data: photos } = photoAPI.useFetchAllPhotosQuery(1);

  return (
    <>
      <div className={style.eventPage_navbar}>
        <div>
          {navbar.map((item, index) => (
            <a key={index} href="#">
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className={style.section1_back_ellipseGradient}></div>

      <div className={style.section1_container}>
        <div className={style.eventPage_section1}>
          <img className={style.section1_tape1} src={tape1} alt="" />
          <img className={style.section1_tape2} src={tape2} alt="" />
          <img
            className={style.section1_image}
            src={photos?.photoCards[0].photos[0].url}
            alt="Hero"
          />

          <div className={style.section1_text}>
            <div>
              <h3>
                {photos?.photoCards[0].establishment.name} /{" "}
                {photos?.photoCards[0].eventName}{" "}
              </h3>
              <p> {photos?.photoCards[0].date}</p>
            </div>

            <button className={style.section1_button}>Купить билет</button>
          </div>
        </div>
        <button className={style.section1_button_media}>Купить билет</button>
      </div>
      <img className={style.eventPage_banner} src={banner} alt="banner" />
      <img
        className={style.eventPage_bannerMini}
        src={bannerMini}
        alt="banner"
      />
    </>
  );
};

export default Section1;

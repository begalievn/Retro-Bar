import React, { useEffect, useState } from "react";

// imported images
import bookImage from "../../assets/mainPage/mainAd-photo.png";
import { sketch } from "../../assets/ui-images/images";

// imported components
import MainNews from "./components/news/MainNews";
import PalaroidSlider from "./components/palaroid-slider/PalaroidSlider";
import PhotoReports from "./components/photo-reports/PhotoReports";
import TopInstituions from "./components/top-institutions/TopInstituions";
import InstitutesSlider from "../../UI/InstitutesSlider/institutes-slider/InstitutesSlider";
import Book from "../../UI/Book/Book";

// imported types
import { BookProps } from "../../types/bookTypes/bookTypes";

import classes from "./mainPage.module.css";
import BottomEmojis from "../../UI/BottomEmojis/BottomEmojis";
import CalendarIcon from "../../UI/CalendarIcon/CalendarIcon";

import { photoAPI } from "../../store/features/photos/photoQuery";
import { establishmentsAPI } from "../../store/features/establishments/establishmentsQuery";
import { getPalaroidCardData } from "../../utils/helpers/getPalaroidCardData";
import { getTopInstCardData } from "../../utils/helpers/getTopInstCardData";
import { getInstitudeSliderData } from "../../utils/helpers/getInstitudeSliderData";

let bookProps: BookProps = {
  data: {
    text: "Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.",
    title: "Заказать сьёмку сейчас",
    image: bookImage,
  },
  page: "main",
};

const MainPage = () => {
  const {
    data: photos,
    error: photoError,
    isLoading: photoLoading,
  } = photoAPI.useFetchAllPhotosQuery(8);

  const {
    data: establishments,
    error: establishmentError,
    isLoading: establishmentLoading,
  } = establishmentsAPI.useFetchAllEstablishmentsQuery("");

  console.log("establishments", establishments);

  return (
    <div className={classes.main}>
      <div className={classes.header_background_effect}></div>
      <CalendarIcon />
      <div className={classes.main_one}>
        {photoLoading ? (
          <p>Loading</p>
        ) : (
          <PalaroidSlider cards={getPalaroidCardData(photos.photoCards)} />
        )}
        {establishmentLoading ? (
          <p>Loading</p>
        ) : (
          <TopInstituions
            institutions={getTopInstCardData(establishments.establishments)}
          />
        )}
      </div>

      <PhotoReports />

      <div className={classes.paper_background}>
        <div className={classes.slider_title_container}>
          <h2 className={classes.slider_title}>{"Заведения"}</h2>
          <img src={sketch} />
        </div>
        {establishmentLoading ? (
          <p>Loading</p>
        ) : (
          <InstitutesSlider
            data={getInstitudeSliderData(establishments.establishments)}
            isContentBlack={true}
          />
        )}
        <MainNews />
        <div className={classes.paper_gradient_top}></div>
        <div className={classes.paper_gradient_right}></div>
        <div className={classes.paper_gradient_left}></div>
      </div>

      <Book {...bookProps} />
      <BottomEmojis />
    </div>
  );
};

export default MainPage;

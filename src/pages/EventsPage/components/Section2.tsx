import style from "../eventPage.module.css";
import AllEvents from "../../../layout/allEvents/AllEvents";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getPhotos } from "../../../apis/getPhotos";
import { gettingPhotos } from "../../../store/features/photos/photosSlice";

const Section2: FC = () => {


  return (
    <div className={style.eventPage_section2}>
      <h3>Все события</h3>
      <AllEvents />
      <a href="#">Смотреть все</a>
    </div>
  );
};

export default Section2;

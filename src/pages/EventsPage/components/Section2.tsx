import style from "../eventPage.module.css";
import AllEvents from "../../../layout/allEvents/AllEvents";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { gettingPhotos } from "../../../store/features/photos/photosSlice";
import { Link, useNavigate } from "react-router-dom";
import { MyPerson } from "../../../types/newsPages/news";

interface D {
  name: string;
}

const Section2: FC<MyPerson> = (props) => {
  const navigate = useNavigate();
  return (
    <div className={style.eventPage_section2}>
      <h3>{props.name}</h3>
      <AllEvents />
      <Link to="/photo">Смотреть все</Link>
    </div>
  );
};

export default Section2;

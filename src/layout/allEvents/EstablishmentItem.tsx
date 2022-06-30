import React, { FC } from "react";
import style from "./AllEvents.module.css";
import eyeIcon from "../../assets/icons/eye.svg";
import pictureIcon from "../../assets/icons/picture.svg";

import { IPhotos } from "../../types/apiTypes/photo";

type PropsType = {
  item: IPhotos;
};

const EstablishmentItem: FC<PropsType> = ({ item }) => {


  let date = item.date.split('').slice(0,10).join('')
  console.log(date);
  
  return (
    <div className={style.section2_establishment}>
      <img
        src={item.photos[0]?.url}
        className={style.section2_establishment_image}
        alt=""
      />
      <div className={style.section2_establishment_text}>
        <h3>{item.establishment.name}</h3>
        <p>{item.eventName}</p>
        <div>
          <div>
            <div className={style.establishment_text_views}>
              <img src={eyeIcon} alt="" /> {item.views}{" "}
            </div>
            <div>
              <img src={pictureIcon} alt="" /> {item.photos.length}{" "}
            </div>
          </div>
          <div className={style.section2_establishment_date}>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default EstablishmentItem;

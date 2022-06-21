import React, { FC } from "react";
import style from "./AllEvents.module.css";
import eyeIcon from "../../assets/icons/eye.svg";
import pictureIcon from "../../assets/icons/picture.svg";
import { IEstablishments } from "./AllEvents";

type PropsType = {
  item: IEstablishments;
};

const EstablishmentItem: FC<PropsType> = ({ item }) => {
  return (
    <div className={style.section2_establishment}>
      <img
        src={item.image}
        className={style.section2_establishment_image}
        alt=""
      />
      <div className={style.section2_establishment_text}>
        <h3>{item.nameEstablishment}</h3>
        <p>{item.nameParty}</p>
        <div>
          <div>
            <div className={style.establishment_text_views}>
              <img src={eyeIcon} alt="" /> {item.views}{" "}
            </div>
            <div>
              <img src={pictureIcon} alt="" /> {item.amountImage}{" "}
            </div>
          </div>
          <div className={style.section2_establishment_date}>{item.date}</div>
        </div>
      </div>
    </div>
  );
};

export default EstablishmentItem;

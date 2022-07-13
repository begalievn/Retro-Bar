import React, { FC, useState } from "react";
import style from "./AllEvents.module.css";
import eyeIcon from "../../assets/icons/eye.svg";
import pictureIcon from "../../assets/icons/picture.svg";

import { IPhotos } from "../../types/apiTypes/photo";
import NewGallery from "../../UI/NewGallery/NewGallery";
import { CurrentEventProps } from "../../UI/CalendarModal/CalendarEvents/Events/Events";

type PropsType = {
  item: IPhotos;
};

const EstablishmentItem: FC<PropsType> = ({ item }) => {
  const [galleryModal, setGalleryModal] = useState(false);
  const toggleGalleryModal = () => setGalleryModal(!galleryModal)
  const [currentEvent, setCurrentEvent] = useState<CurrentEventProps | null>(null)

  const onClickEvent = (event: IPhotos) => {
    
    const data= {
      photos: event.photos!,
      establishment:event.establishment.name!,
      event:event.eventName!
    }
    setCurrentEvent(data)
    setGalleryModal(true)

  };      

  
  return (
    <>
    
    <div className={style.section2_establishment}>
      <img
      onClick={(e)=>onClickEvent(item)}
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
          <div className={style.section2_establishment_date}>{item.date}</div>
        </div>
      </div>
    </div>
    {galleryModal && currentEvent &&<NewGallery close={toggleGalleryModal} eventInfo={currentEvent}/>}
      
      </>
  );
};

export default EstablishmentItem;

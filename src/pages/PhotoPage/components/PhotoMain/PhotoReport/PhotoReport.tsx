import React, { FC } from "react";
import ImagesList from "../ImagesList/ImagesList";
import eventPlace from "../../../../../assets/photoPageImages/main-images/parkEventplace.png";
import zeppelinBar from "../../../../../assets/photoPageImages/main-images/zeppelinBar.png";
import kipishBar from "../../../../../assets/photoPageImages/main-images/kipishBar.png";
import attention from "../../../../../assets/photoPageImages/main-images/attention.png";
import munchenPub from "../../../../../assets/photoPageImages/main-images/munchenPub.png";
import pintaPub from "../../../../../assets/photoPageImages/main-images/pintaPub.png";
import effect from "../../../../../assets/photoPageImages/main-images/effect.png";
import mamaRada from "../../../../../assets/photoPageImages/main-images/mamaRada.png";
import secretMusicHall from "../../../../../assets/photoPageImages/main-images/secretMusicHall.png";
import molecula from "../../../../../assets/photoPageImages/main-images/molecula.png";
import oblaco53 from "../../../../../assets/photoPageImages/main-images/oblaco53.png";
import fantasy from "../../../../../assets/photoPageImages/main-images/fantasy.png";
import pablo from "../../../../../assets/photoPageImages/main-images/pablo.png";
import squareBorder from "../../../../../assets/photoPageImages/square-border.png";
import wideBorder from "../../../../../assets/photoPageImages/wide-border.png";
import longBorder from "../../../../../assets/photoPageImages/long-border.png";
import circle from "../../../../../assets/photoPageImages/icons/circle.svg";
import star from "../../../../../assets/photoPageImages/icons/star.svg";
import Button from "../../Button/Button";


const PhotoReport: FC = () => {
  const images = [
    {
      link: eventPlace,
      name: "PARK EVENTPLACE",
      border: wideBorder,
      id: 1,
      partyName: "ÜN",
      photos: 122,
      views: 6545,
      date: "14 мая 2022",
      class: "eventPlace",
      studio:'Фото студия “Оригами”'
    },
    {
      link: zeppelinBar,
      name: "ZEPPELIN BAR",
      border: squareBorder,
      id: 2,
      partyName: "STREET CREDIBILITY",
      photos: 144,
      views: 709,
      date: "20 мая 2022",
      class: "zeppelinBar",
    },
    {
      link: kipishBar,
      name: "KIPISH BAR",
      border: squareBorder,
      id: 3,
      partyName: "Birthday Party",
      photos: 50,
      views: 660,
      date: "20 мая 2022",
      class: "kipishBar",
    },
    {
      link: attention,
      name: "ATTENTION",
      border: squareBorder,
      id: 4,
      partyName: "ATTENTION",
      photos: 79,
      views: 665,
      date: "28 мая 2022",
      class: "attention",
    },
    {
      name: "MUNCHEN PUB",
      link: munchenPub,
      border: squareBorder,
      id: 5,
      partyName: "LIVE MUSIC: COOL BAND",
      photos: 60,
      views: 675,
      date: "20 мая 2022",
      class: "munchenPub",
    },
    {
      name: "PINTA PUB",
      link: pintaPub,
      border: longBorder,
      id: 6,
      partyName: "АБДЫШ АТА",
      photos: 67,
      views: 4660,
      date: "14 мая 2022",
      class: "pintaPub",
    },
    {
      name: "Реклама",
      link: effect,
      ad: true,
      border: wideBorder,
      id: 7,
      class: "advertise",
      button:<Button/>,
      icon: star,
      title: "Фото и видео услуги",
      text: "Современные технологии достигли такого уровня, что перспективное планирование способствует.",
    },
    {
      name: "МАМА РАДА",
      link: mamaRada,
      border: squareBorder,
      id: 8,
      partyName: "SATURDAY",
      photos: 95,
      views: 5004,
      date: "14 мая 2022",
      class: "mamaRada",
    },
    {
      name: "SECRET MUSIC HALL",
      link: secretMusicHall,
      border: squareBorder,
      id: 9,
      partyName: "ВИКТОРИНА",
      photos: 70,
      views: 4789,
      date: "11 мая 2022",
      class: "secretMusicHall",
    },
    {
      name: "MOLECULA",
      link: molecula,
      border: squareBorder,
      id: 10,
      partyName: "ОТКРЫТИЕ",
      photos: 87,
      views: 8335,
      date: "21 октября 2021",
      class: "molecula",
    },
    {
      name: "ОБЛАКО 53",
      link: oblaco53,
      border: squareBorder,
      id: 11,
      partyName: "КОНЦЕРТ: 5STA FAMILY",
      photos: 70,
      views: 7336,
      date: "22 мая 2022",
      class: "oblaco53",
    },
    {
      name: "Реклама",
      link: fantasy,
      ad: true,
      border: wideBorder,
      id: 12,
      icon: circle,
      button:<Button/>,
      class: "advertise2",
      title: "Заказать сьёмку сейчас",
      text: "Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.",
    },
    {
      name: "PABLO",
      link: pablo,
      border: longBorder,
      id: 13,
      partyName: "TUESDAY",
      photos: 75,
      views: 4695,
      date: "14 мая 2022",
      class: "pablo",
    },
  ];
  return (
      <ImagesList images={images} />
  );
};

export default PhotoReport;

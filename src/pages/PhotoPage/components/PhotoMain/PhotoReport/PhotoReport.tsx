import React, { FC } from "react";
import ImagesList from "../ImagesList/ImagesList";
import {
  eventPlace,
  zeppelinBar,
  kipishBar,
  attention,
  munchenPub,
  pintaPub,
  effect,
  mamaRada,
  secretMusicHall,
  molecula,
  oblaco53,
  fantasy,
  pablo,
  squareBorder,
  wideBorder,
  longBorder,
  circle,
  star,
} from "./index";
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
      studio: "Фото студия “Оригами”",
      images:[{image:eventPlace},{image:eventPlace},{image:eventPlace},{image:eventPlace}]
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
      images:[{image:zeppelinBar},{image:zeppelinBar},{image:zeppelinBar},{image:zeppelinBar}]
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
      images:[{image:kipishBar},{image:kipishBar},{image:kipishBar},{image:kipishBar}]
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
      images:[{image:attention},{image:attention},{image:attention},{image:attention}]
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
      images:[{image:munchenPub},{image:munchenPub},{image:munchenPub},{image:munchenPub}]
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
      images:[{image:pintaPub},{image:pintaPub},{image:pintaPub},{image:pintaPub}]
    },
    {
      name: "Реклама",
      link: effect,
      ad: true,
      border: wideBorder,
      id: 7,
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
      images:[{image:mamaRada},{image:mamaRada},{image:mamaRada},{image:mamaRada}]
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
      images:[{image:secretMusicHall},{image:secretMusicHall},{image:secretMusicHall},{image:secretMusicHall}]
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
      images:[{image:molecula},{image:molecula},{image:molecula},{image:molecula}]
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
      images:[{image:oblaco53},{image:oblaco53},{image:oblaco53},{image:oblaco53}]
    },
    {
      name: "Реклама",
      link: fantasy,
      ad: true,
      border: wideBorder,
      id: 12,
      icon: circle,
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
      images:[{image:pablo},{image:pablo},{image:pablo},{image:pablo}]
    },
  ];
  return <ImagesList images={images} />;
};

export default PhotoReport;

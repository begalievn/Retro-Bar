import React, { FC } from "react";

const wideBorder = "../../../../../assets/photoPageImages/wide-border.png";
const squareBorder = "../../../../../assets/photoPageImages/square-border.png";
const longBorder = "../../../../../assets/photoPageImages/long-border.png";
import "../../../../../fonts/Mont/stylesheet.css";
import styles from "./PhotoReport.module.css";
import ImagesList from "../ImagesList/ImagesList";

type PhotoReportProps = {
  link?: any;
};

const PhotoReport: FC<PhotoReportProps> = ({link}) => {
  const images = [
    {
      link: link,
      name: "PARK EVENTPLACE",
      border: wideBorder,
      id: 1,
      partyName: "ÜN",
      photos: 122,
      views: 6545,
      date: "14 мая 2022",
      class: "eventPlace",
    },
    {
      link: link,
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
      link: link,
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
      link: link,
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
      link: link,
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
      link: link,
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
      link: link,
      ad: true,
      border: wideBorder,
      id: 7,
      class: "advertise",
      date: "",
      title: "Фото и видео услуги",
      text: "Современные технологии достигли такого уровня, что перспективное планирование способствует.",
    },
    {
      name: "МАМА РАДА",
      link: link,
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
      link: link,
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
      link: link,
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
      link: link,
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
      link: link,
      ad: true,
      border: wideBorder,
      id: 12,
      class: "advertise2",
      title: "Фото и видео услуги",
      text: "Современные технологии достигли такого уровня, что перспективное планирование способствует.",
    },
    {
      name: "PABLO",
      link: link,
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
    <div className={styles.gridBlocks}>
      <ImagesList images={images} />
    </div>
  );
};

export default PhotoReport;

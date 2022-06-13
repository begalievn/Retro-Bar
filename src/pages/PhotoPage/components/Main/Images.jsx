import React from "react";
import eventPlace from "../../../../assets/photoPageImages/main-images/parkEventplace.png";
import zeppelinBar from "../../../../assets/photoPageImages/main-images/zeppelinBar.png";
import kipishBar from "../../../../assets/photoPageImages/main-images/kipishBar.png";
import attention from "../../../../assets/photoPageImages/main-images/attention.png";
import munchenPub from "../../../../assets/photoPageImages/main-images/munchenPub.png";
import pintaPub from "../../../../assets/photoPageImages/main-images/pintaPub.png";
import mamaRada from "../../../../assets/photoPageImages/main-images/mamaRada.png";
import secretMusicHall from "../../../../assets/photoPageImages/main-images/secretMusicHall.png";
import molecula from "../../../../assets/photoPageImages/main-images/molecula.png";
import oblaco53 from "../../../../assets/photoPageImages/main-images/oblaco53.png";
import pablo from "../../../../assets/photoPageImages/main-images/pablo.png";
import wideBorder from "../../../../assets/photoPageImages/wide-border.png";
import squareBorder from "../../../../assets/photoPageImages/square-border.png";
import longBorder from "../../../../assets/photoPageImages/long-border.png";
import '../../../../fonts/Mont/stylesheet.css'
import styles from "./main.module.css";
const ImagesList = () => {
  const images = [
    {
      link: eventPlace,
      name: "PARK EVENTPLACE",
      border: wideBorder,
      id: 1,
      partyName: 'ÜN',
      photos: 122,
      views: 6545,
      date: '14 мая 2022',
      class:'eventPlace'
    },
    {
      link: zeppelinBar,
      name: "ZEPPELIN BAR",
      border: squareBorder,
      id: 2,
      partyName: 'STREET CREDIBILITY',
      photos: 144,
      views: 709,
      date: '20 мая 2022',
      class:'zeppelinBar'

    },
    {
      link: kipishBar,
      name: "KIPISH BAR",
      border: squareBorder,
      id: 3,
      partyName: 'Birthday Party',
      photos: 50,
      views: 660,
      date: '20 мая 2022',
      class:'kipishBar'
    },
    {
      link: attention,
      name: "ATTENTION",
      border: squareBorder,
      id: 4,
      partyName: 'ATTENTION',
      photos: 79,
      views: 665,
      date: '28 мая 2022',
      class:'attention'
    },
    {
      name: "MUNCHEN PUB",
      link: munchenPub,
      border: squareBorder,
      id: 5,
      partyName: 'LIVE MUSIC: COOL BAND',
      photos: 60,
      views: 675,
      date: '20 мая 2022',
      class:'munchenPub'
    },
    {
      name: "PINTA PUB",
      link: pintaPub,
      border: longBorder,
      id: 6,
      partyName: 'АБДЫШ АТА',
      photos: 67,
      views: 4660,
      date: '14 мая 2022',
      class:'pintaPub'
    },
    {
      name: "МАМА РАДА",
      link: mamaRada,
      border: squareBorder,
      id: 7,
      partyName: 'SATURDAY',
      photos: 95,
      views: 5004,
      date: '14 мая 2022',
      class:'mamaRada'
    },
    {
      name: "SECRET MUSIC HALL",
      link: secretMusicHall,
      border: squareBorder,
      id: 8,
      partyName: 'ВИКТОРИНА',
      photos: 70,
      views: 4789,
      date: '11 мая 2022',
      class:'secretMusicHall'
    },
    {
      name: "MOLECULA",
      link: molecula,
      border: squareBorder,
      id: 9,
      partyName: 'ОТКРЫТИЕ',
      photos: 87,
      views: 8335,
      date: '21 октября 2021',
      class:'molecula'
    },
    {
      name: "ОБЛАКО 53",
      link: oblaco53,
      border: squareBorder,
      id: 10,
      partyName: 'КОНЦЕРТ: 5STA FAMILY',
      photos: 70,
      views:7336,
      date: '22 мая 2022',
      class:'oblaco53'
    },
    {
      name: "PABLO",
      link: pablo,
      border: longBorder,
      id: 11,
      partyName: 'TUESDAY',
      photos: 75,
      views: 4695,
      date: '14 мая 2022',
      class:'pablo'
    },
  ];


  return (
    <div className={styles.gridBlocks}>
      {images.map((item) => (
        <div className={styles[item.class]} key={item.id}>
          <div className={styles.image_border}>
            <img src={item.border} alt="" />
          </div>
          <div className={styles.image}>
            <img src={item.link} alt="" />
          </div>
          <div className={styles.image_info}>
            <h4 className={styles.image_info_title}>{item.name}</h4>
            <p className={styles.image_info_partyName}>{item.partyName}</p>
            <div className={styles.image_info_footer}>
              <span className={styles.image_info_views}><img src={require('../../../../assets/photoPageImages/icons/eye.svg').default} alt="" />{item.views}</span>
              <span className={styles.image_info_photos}><img src={require('../../../../assets/photoPageImages/icons/pic.svg').default} alt="" />{item.photos}</span>
              <span className={styles.image_info_date}>{item.date}</span>
            </div>
          </div>
        </div>

        // <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </div>
  );
};

export default ImagesList;

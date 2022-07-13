import React from "react";
import Natan from "../../assets/NewsPages/image/Natan.png";
import Mot from "../../assets/NewsPages/image/Mot.png";
import Timati from "../../assets/NewsPages/image/Timati.png";
import Background from "../../assets/NewsPages/image/backgraund_gradient.png";
import Fon from "../../assets/NewsPages/image/Fon.png";
import Logo from "../../assets/NewsPages/image/logo.svg";
import Smile from "../../assets/NewsPages/image/logo_smile.svg";

import Section2 from "../EventsPage/components/Section2";
import classes from "./NewsPages.module.css";
import SectionAdaptive from "./Section__adaptive";

import { MyPerson } from "../../types/newsPages/news";
import BottomEmojis from "../../UI/BottomEmojis/BottomEmojis";
import { useNavigate } from "react-router-dom";
import CalendarIcon from "../../UI/CalendarIcon/CalendarIcon";
import { API } from "../../utils/helpers/Consts";
import axios from "axios";

const NewsPages = () => {
  
  const data: MyPerson[] = [
    
    {
      image: Natan,
      fon: Fon,
      background: Background,
      name: "Natan",
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",

      id: 1,
    },
    {
      image: Mot,
      fon: Fon,

      background: Background,
      name: "Mot",
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",
      id: 2,
    },
    {
      image: Timati,
      name: "Timati",
      fon: Fon,

      background: Background,
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",
      id: 3,
    },
  ];

  let navi = useNavigate();

  return (
    <>
      <div className={classes.container}>
        <img className={classes.logo_container} src={Logo} /> 
        {data.map((item: MyPerson, index: number) => {
          return (
            <div key={index} className={classes.title_container}>
              <div className={classes.img_container}>
                <img
                  className={[classes.img_background, classes.item].join(" ")}
                  src={item.fon}
                  alt="Sample"
                />
                <img
                  className={[classes.img_person, classes.item].join(" ")}
                  src={item.image}
                  alt="Person"
                />
                <img
                  className={[classes.img_fon, classes.item].join(" ")}
                  src={item.background}
                />
              </div>
              <div className={classes.text_container}>
                <h3 className={classes.text_name}>{item.name}</h3>
                <br className={classes.fake} />
                <p className={classes.text_type}>{item.type}</p>
                <br className={classes.fake} />
                <div className={classes.text_description}>
                  {item.description}
                </div>
                <br className={classes.fake} />
                <button onClick={() => navi("/photo")} className={classes.btn}>
                  Смотреть
                </button>
              </div>
            </div>
          );
        })}
        <div className={classes.person_background__adaptive}>
          <SectionAdaptive data={data} />
        </div>
        <img className={classes.smile} src={Smile} />
      </div>
      <CalendarIcon />
      <Section2 />
      <BottomEmojis />
    </>
  );
};

export default NewsPages;

{
  /* <div className={classes.container}>
  <div className={classes.containers}>
    {data.map((item: MyPerson, index: number) => {
      return (
        <div key={index} className={classes.person}>
            <img
              className={classes.person_phon}
              src={item.fon}
              alt="Phon"
            />
          <div className={classes.person_container}>
            <img
              className={classes.photos}
              src={item.image}
              alt="Person"
            />
            <img className={classes.background} src={item.background} />
          </div>

          <div className={classes.text_container}>
            <div className={classes.text_title}>
              <h3>{item.name}</h3>
              <br />
              <p>{item.type}</p>
              <br />
              <span>{item.description}</span>
              <br />
              <button
                onClick={() => navi("/photo")}
                className={classes.btn}
              >
                Смотреть
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
 
</div>
 */
}

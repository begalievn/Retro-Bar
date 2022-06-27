import React from "react";
import Section2 from "../EventsPage/components/Section2";
import classes from "./NewsPages.module.css";
import SectionAdaptive from "./Section__adaptive";

import Natan from "./image/Natan.png";
import Mot from "./image/Mot.png";
import Timati from "./image/Timati.png";
import Up from "../../assets/institutionBarImg/iconsMap/emoji.svg";
import Emojies from "../../assets/institutionBarImg/iconsMap/arrowUp.svg";
// import star2 from "../../assets/institutionBarImg/iconsMap/star.svg";
// import star3 from "../../assets/institutionBarImg/iconsMap/emojies.svg";
import { MyPerson } from "../../types/newsPages/news";

const NewsPages = () => {
  const data: MyPerson[] = [
    {
      image: Natan,
      name: "Natan",
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",
      id: 1,
    },
    {
      image: Mot,
      name: "Mot",
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",
      id: 2,
    },
    {
      image: Timati,
      name: "Timati",
      type: "BLACKSTAR",
      description: "Являясь всего лишь частью общей картины",
      id: 3,
    },
  ];

  return (
    <>
      <div className={classes.container}>
        <div className={classes.containers}>
          {data.map((item: MyPerson, index: number) => {
            return (
              <div key={index} className={classes.person_background}>
                <img className={classes.photos} src={item.image} alt="" />
                <div className={classes.text}>
                  <h3>{item.name}</h3>
                  <br />
                  <p>{item.type}</p>
                  <br />
                  <span>{item.description}</span>
                  <br />
                  <button className={classes.btn}>Смотреть</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.person_background__adaptive}>
          <SectionAdaptive data={data} />
        </div>
      </div>
      <Section2 />
      {/* <section className={classes.container_icon}>
        <img src={Emojies} alt="smile" className={classes.emojies} />
        <img src={Up} alt="up" className={classes.up} />
      </section> */}
    </>
  );
};

export default NewsPages;

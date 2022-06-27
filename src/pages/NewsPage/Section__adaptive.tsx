import React, { FC } from "react";
import { MyPerson, Section_adaptiveProps } from "../../types/newsPages/news";
import classes from "./Section_adaptive.module.css";

// interface MyPerson {
//   image: string;
//   name: string;
//   type: string;
//   description: string;
//   id: number;
// }

// interface Section_adaptiveProps {
//   data: MyPerson[];
// }

const SectionAdaptive: FC<Section_adaptiveProps> = ({ data }) => {
  return (
    <div className={classes.main_container}>
      <h2 className={classes.title}>Личности</h2>
      <div className={classes.window}>
        <div className={classes.all_pages_container}>
          {data.map((item: MyPerson, index: number) => {
            return (
              <div className={classes.person_background} key={index}>
                <div className={classes.photo}>
                  <img className={classes.image} src={item.image} />
                </div>
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
      </div>
    </div>
  );
};

export default SectionAdaptive;

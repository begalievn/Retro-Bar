import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import CalendarIcon from "../../UI/CalendarIcon/CalendarIcon";
import { getNewsData } from "../../apis/getNewsData";

const NewsPages = () => {
  const [data, setData] = useState<MyPerson[]>([]);

  async function getData() {
    const newData = await getNewsData()();
    setData(newData);
  }

  useEffect(() => {
    getData();
  }, []);

  let navi = useNavigate();

  return (
    <>
      <div className={classes.container}>
        <img className={classes.logo_container} src={Logo} />
        {data.map((item: MyPerson, index: number) => {
          // if (item.photo !== "string") return;

          return (
            <div key={index} className={classes.title_container}>
              <div className={classes.img_container}>
                <img
                  className={[classes.img_background, classes.item].join(" ")}
                  src={Fon}
                  alt="Sample"
                />
                <img
                  className={[classes.img_person, classes.item].join(" ")}
                  src={item.photo}
                  alt="Person"
                />
                <img
                  className={[classes.img_fon, classes.item].join(" ")}
                  src={Background}
                />
              </div>
              <div className={classes.text_container}>
                <h3 className={classes.text_name}>{item.name}</h3>
                <p className={classes.text_type}>{item.type}</p>
                <div className={classes.text_description}>
                  {item.description}
                </div>
                <Link to={`/news/${item.id}`}>
                  <button className={classes.btn}>Смотреть</button>
                </Link>
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
      <Section2 name="Ночная жизнь" />
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
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

function value(value: any): any {
  throw new Error("Function not implemented.");
}

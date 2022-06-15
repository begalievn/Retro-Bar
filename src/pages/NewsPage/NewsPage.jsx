import React from "react";
import classes from "./NewsPage.module.css";
import Timati from "./image/Timati.png";
import Natan from "./image/Natan.png";
import Mot from "./image/Mot.png";
import AllEvents from "../../layout/allEvents/AllEvents";
const NewsPage = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>
          <div>
            <div>
              <div className={classes.row2}>
                <div class={classes.column}>
                  <h1 className={classes.person_title}>Личности</h1>
                  <div className={classes.personalities}>
                    <img className={classes.photo} src={Natan} alt="Fon" />
                    <div className={classes.gradient}>
                      <h1>Natan</h1>
                      <br />
                      <br />
                      <p>BLACKSTAR</p>
                      <br />
                      <span>
                        Являясь всего лишь <p>частью общей</p> картины
                      </span>
                      <br />
                      <br />
                      <button className={classes.btn}>Смотреть</button>
                    </div>
                  </div>
                </div>
                <div class={classes.column}>
                  <div className={classes.personalities}>
                    <img className={classes.photo} src={Mot} alt="Fon" />{" "}
                    <div className={classes.gradient}>
                      <h1>Mot</h1>
                      <br />
                      <br />
                      <p>BLACKSTAR</p>
                      <br />
                      <span>
                        Являясь всего лишь <p>частью общей</p> картины
                      </span>
                      <br />
                      <br />
                      <button className={classes.btn}>Смотреть</button>
                    </div>
                  </div>
                </div>
                <div class={classes.column}>
                  <div className={classes.personalities}>
                    <img className={classes.photo} src={Timati} alt="Fon" />
                    <div className={classes.gradient}>
                      <h1>
                        Тим <br /> <br /> <h4>ати</h4>
                      </h1>
                      <br />
                      <p>BLACKSTAR</p>
                      <br />
                      <span>
                        Являясь всего лишь <p>частью общей</p> картины
                      </span>
                      <br />
                      <br />
                      <button className={classes.btn}>Смотреть</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllEvents className={classes.con} />
    </>
  );
};

export default NewsPage;

import React from "react";

import classes from "./Hero.module.css";
import mainClasses from "../../VideoPage.module.css";
import { Button } from "../../../../UI";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={`${mainClasses.container} ${classes.shootContainer}`}>
        <div className={classes.shootBlock}>
          <h3 className={classes.shootTitle}>Фото и видео услуги</h3>
          <p className={classes.shootText}>
            Современные технологии достигли такого уровня, что перспективное
            планирование способствует.
          </p>
          {/*<button className={classes.btn}>Заказать Съемку</button>*/}

          <Button size={"medium"}>Заказать Съемку </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

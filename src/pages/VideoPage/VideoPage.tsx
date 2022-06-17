import React from "react";

import classes from "./VideoPage.module.css";

const VideoPage = () => {
  return (
    <section className={classes.hero}>
      <div className={`${classes.container} ${classes.shootContainer}`}>
        <div className={classes.shootBlock}>
          <h3 className={classes.shootTitle}>Фото и видео услуги</h3>
          <p className={classes.shootText}>
            Современные технологии достигли такого уровня, что перспективное
            планирование способствует.
          </p>
          <button className={classes.btn}>Заказать Съемку</button>
        </div>
      </div>
    </section>
  );
};

export default VideoPage;

import React from "react";
import classes from "./NewsPage.module.css";
import photo1 from "./image/photo1.png";
import photo2 from "./image/photo2.png";
import photo3 from "./image/image 3.png";
import photo4 from "./image/photo4.png";

const NightLife = () => {
  return (
    <div className={classes.container__nightLife}>
      <div className={classes.item__container}>
        <div className={classes.title__container}>
          <img src={photo1} alt="" width={485} height={367} />

          <img src={photo2} alt="" width={485} height={367} />

          <img src={photo3} alt="" width={485} height={367} />

          <img src={photo4} alt="" width={485} height={367} />
        </div>
      </div>
      <div>
        <h1>Mamed</h1>
      </div>
    </div>
  );
};

export default NightLife;

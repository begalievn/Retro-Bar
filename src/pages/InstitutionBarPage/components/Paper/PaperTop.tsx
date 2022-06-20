import React, { FC } from "react";
import classes from "./Paper.module.css";
import polaroidMini from "../../../../assets/institutionBarImg/photo/polaroidMini.png";
import top1 from "../../../../assets/institutionBarImg/photo/top1.png";
import top2 from "../../../../assets/institutionBarImg/photo/top2.png";
import top3 from "../../../../assets/institutionBarImg/photo/top3.png";

const PaperTop: FC = () => {
  return (
    <div>
      <p className={classes.hp}>24 мая 2022</p>
      <img src={polaroidMini} width="260px" className={classes.frame1} />
      <img src={top1} width="247px" className={classes.fr1} />
      <img src={polaroidMini} width="260px" className={classes.frame2} />
      <img src={top2} width="247px" className={classes.fr2} />
      <img src={polaroidMini} width="260px" className={classes.frame3} />
      <img src={top3} width="247.5px" className={classes.fr3} />
    </div>
  );
};
export { PaperTop };

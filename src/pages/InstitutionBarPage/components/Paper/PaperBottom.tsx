import React, { FC } from "react";
import polaroidMini from "../../../../assets/institutionBarImg/photo/polaroidMini.png";
import bottom1 from "../../../../assets/institutionBarImg/photo/bottom1.png";
import bottom2 from "../../../../assets/institutionBarImg/photo/bottom2.png";
import bottom3 from "../../../../assets/institutionBarImg/photo/bottom3.png";
import classes from "./Paper.module.css";
const PaperBottom: FC = () => {
  return (
    <div className={classes.bottom}>
      <p className={classes.hp}>15 марта 2022</p>
      <img src={polaroidMini} width="260px" className={classes.frame1} />
      <img src={bottom1} width="247px" className={classes.fr1} />
      <img src={polaroidMini} width="260px" className={classes.frame2} />
      <img src={bottom2} width="248px" className={classes.fr2} />
      <img src={polaroidMini} width="260px" className={classes.frame3} />
      <img src={bottom3} width="247.5px" className={classes.fr3} />
    </div>
  );
};
export { PaperBottom };

import React from "react";
import barStyle from "../institutionBar.module.css";

import backgroundPaper from "../../../assets/institutionBarImg/back/backgroundPaper.png";
import polaroidMini from "../../../assets/institutionBarImg/photo/polaroidMini.png";
import top1 from "../../../assets/institutionBarImg/photo/top1.png";
import top2 from "../../../assets/institutionBarImg/photo/top2.png";
import top3 from "../../../assets/institutionBarImg/photo/top3.png";
import bottom1 from "../../../assets/institutionBarImg/photo/bottom1.png";
import bottom2 from "../../../assets/institutionBarImg/photo/bottom2.png";
import bottom3 from "../../../assets/institutionBarImg/photo/bottom3.png";

export default function Paper() {
  return (
    <div className={barStyle.paperComponent}>
      <img src={backgroundPaper} width="100%" className={barStyle.phone111} />
      <div className={barStyle.photoDiv}>
        <h1 className={barStyle.h1p}>Репортажи</h1>
        <div>
          <p className={barStyle.hp}>Date</p>
          <img src={polaroidMini} width="260px" className={barStyle.frame1} />
          <img src={top1} width="238px" className={barStyle.fr1} />
          <img src={polaroidMini} width="260px" className={barStyle.frame2} />
          <img src={top2} width="238px" className={barStyle.fr2} />
          <img src={polaroidMini} width="260px" className={barStyle.frame3} />
          <img src={top3} width="237px" className={barStyle.fr3} />
        </div>
        <div className={barStyle.botttom}>
          <p className={barStyle.hp}>date</p>
          <img src={polaroidMini} width="260px" className={barStyle.frame1} />
          <img src={bottom1} width="238px" className={barStyle.fr1} />
          <img src={polaroidMini} width="260px" className={barStyle.frame2} />
          <img src={bottom2} width="238px" className={barStyle.fr2} />
          <img src={polaroidMini} width="260px" className={barStyle.frame3} />
          <img src={bottom3} width="238px" className={barStyle.fr3} />
        </div>
      </div>
      \
    </div>
  );
}

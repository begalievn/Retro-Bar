import React from "react";
import barStyle from "../institutionBar.module.css";
import photo1 from "../../../assets/institutionBarImg/photo/photo.png";
import photo2 from "../../../assets/institutionBarImg/photo/photo2.png";
import photo3 from "../../../assets/institutionBarImg/photo/photo3.png";
import framePolaroid from "../../../assets/institutionBarImg/photo/framepolaroid.png";
import phone from "../../../assets/institutionBarImg/back/graddd.png";
import photo4 from "../../../assets/institutionBarImg/photo/photo4.png";
import photo5 from "../../../assets/institutionBarImg/photo/photo5.png";
import photo6 from "../../../assets/institutionBarImg/photo/photo6.png";
export default function Paper() {
  return (
    <div className={barStyle.paperComponent}>
      <img src={phone} width="100%" className={barStyle.phone111} />
      <div className={barStyle.photoDiv}>
        <h1 className={barStyle.h1p}>Репортажи</h1>
        <div>
          <p className={barStyle.hp}>Date</p>
          <img src={framePolaroid} width="260px" className={barStyle.frame1} />
          <img src={photo1} width="238px" className={barStyle.fr1} />
          <img src={framePolaroid} width="260px" className={barStyle.frame2} />
          <img src={photo2} width="238px" className={barStyle.fr2} />
          <img src={framePolaroid} width="260px" className={barStyle.frame3} />
          <img src={photo3} width="237px" className={barStyle.fr3} />
        </div>
        <div className={barStyle.botttom}>
          <p className={barStyle.hp}>date</p>
          <img src={framePolaroid} width="260px" className={barStyle.frame1} />
          <img src={photo4} width="238px" className={barStyle.fr1} />
          <img src={framePolaroid} width="260px" className={barStyle.frame2} />
          <img src={photo5} width="238px" className={barStyle.fr2} />
          <img src={framePolaroid} width="260px" className={barStyle.frame3} />
          <img src={photo6} width="238px" className={barStyle.fr3} />
        </div>
      </div>
      \
    </div>
  );
}

import React from "react";
import barStyle from "../institutionBar.module.css";


// let frame = ["frame1", "frame2", "frame3"];
// let arrayPhotoTop = [top1, top2, top3];
// let cssOfPhoto = ["fr1", "fr2", "fr3"];
// let arrayPhotoBottom = [bottom1, bottom2, bottom3];

export default function Paper() {
  return (
    <div className={barStyle.paperComponent}>
      <img src={backgroundPaper} width="100%" className={barStyle.phone111} />
      <div className={barStyle.photoDiv}>
        <h1 className={barStyle.h1p}>Репортажи</h1>
        <div>
          <img src={polaroidMini} width="260px" className={barStyle.frame1} />
          <img src={top1} width="247px" className={barStyle.fr1} />
          <img src={polaroidMini} width="260px" className={barStyle.frame2} />
          <img src={top2} width="247px" className={barStyle.fr2} />
          <img src={polaroidMini} width="260px" className={barStyle.frame3} />
          <img src={top3} width="247.5px" className={barStyle.fr3} />
        </div>
        <div className={barStyle.botttom}>
          <p className={barStyle.hp}>date</p>
          <img src={polaroidMini} width="260px" className={barStyle.frame1} />
          <img src={bottom1} width="247px" className={barStyle.fr1} />
          <img src={polaroidMini} width="260px" className={barStyle.frame2} />
          <img src={bottom2} width="248px" className={barStyle.fr2} />
          <img src={polaroidMini} width="260px" className={barStyle.frame3} />
          <img src={bottom3} width="247.5px" className={barStyle.fr3} />
        </div>
      </div>
    </div>
  );
}

/*
 {arrayPhotoTop.map((el) => (
  <>
  <p className={barStyle.hp}>Date</p>
  <img
    src={polaroidMini}
    width="260px"
    className={barStyle.frame}
  />
  <img
    src={el}
    width="247px"
    className={cssOfPhoto.map((css) => barcss)}
  />
 </>))}*/

import classes from "./livebarstyle.module.css";
import { Photos } from "./Photos";
import { FC } from "react";
import top1 from "../../../assets/institutionBarImg/photo/top1.png";
import top2 from "../../../assets/institutionBarImg/photo/top2.png";
import top3 from "../../../assets/institutionBarImg/photo/top3.png";
import bottom1 from "../../../assets/institutionBarImg/photo/bottom1.png";
import bottom2 from "../../../assets/institutionBarImg/photo/bottom2.png";
import bottom3 from "../../../assets/institutionBarImg/photo/bottom3.png";

const PaperNew: FC = () => {
  let paperArrayTop = [
    {
      id: 1,
      photo: top1,
    },
    {
      id: 2,
      photo: top2,
    },
    {
      id: 3,
      photo: top3,
    },
  ];
  let paperArrayBottom = [
    {
      id: 1,
      photo: bottom1,
    },
    {
      id: 2,
      photo: bottom2,
    },
    {
      id: 3,
      photo: bottom3,
    },
  ];
  return (
    <div className={classes.photosBoth}>
      <h1>Репортажи</h1>
      <div className={classes.sliderOne}>
        <Photos
          items={paperArrayTop}
          photo1={top1}
          photo2={top2}
          photo3={top3}
        />
      </div>
      <div className={classes.sliderTwo}>
        <Photos
          items={paperArrayBottom}
          photo1={bottom1}
          photo2={bottom2}
          photo3={bottom3}
        />
      </div>
    </div>
  );
};
export { PaperNew };

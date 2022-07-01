import { FC } from "react";
import classes from "./livebarstyle.module.css";
import photoMain from "../../../assets/institutionBarImg/photo/photoMain.png";
import polaroidMain1 from "../../../assets/institutionBarImg/iconLiveBar/polaroidMain1.png";
import polaroidMini from "../../../assets/institutionBarImg/iconLiveBar/polaroidMini.png";
import photoMini1 from "../../../assets/institutionBarImg/photo/photoMini1.png";
import photoMini2 from "../../../assets/institutionBarImg/photo/photoMini2.png";
import photoMini3 from "../../../assets/institutionBarImg/photo/photoMini3.png";
import photoMini4 from "../../../assets/institutionBarImg/photo/photoMini4.png";
import tape1 from "../../../assets/institutionBarImg/iconLiveBar/miniTape1.svg";
const LivePhoto: FC = () => {
  let mapPhoto = [
    {
      photo: photoMain,
      id: 1,
      polaroid: polaroidMain1,
    },
    {
      photo: photoMini1,
      id: 2,
      polaroid: polaroidMini,
    },
    {
      photo: photoMini2,
      id: 3,
      polaroid: polaroidMini,
    },
    {
      photo: photoMini3,
      id: 4,
      polaroid: polaroidMini,
    },
    {
      photo: photoMini4,
      id: 5,
      polaroid: polaroidMini,
    },
  ];
  return (
    <div className={classes.photo}>
      <section className={classes.photosAll}>
        {mapPhoto.map((el) => (
          <article key={el.id} className={classes.articlePhoto}>
            <img
              src={el.polaroid}
              alt=""
              className={classes.polaroid}
              width="87%"
            />
            <img src={tape1} className={classes.tapes} />
            <img src={el.photo} className={classes.photoSmall} alt="" />
          </article>
        ))}
      </section>
      <p className={classes.livebarTextMobile}>
        Лучше один раз увидеть, чем 100 раз прочитать или услышать! Приходите и
        ощутите уникальную ауру наших заведений!
      </p>
    </div>
  );
};
export { LivePhoto };

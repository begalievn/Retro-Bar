import { FC } from "react";
import photoMain from "../../../../assets/institutionBarImg/photo/photoMain.png";
import effectMain from "../../../../assets/institutionBarImg/photo/effectMain.png";
import polaroidMain1 from "../../../../assets/institutionBarImg/iconLiveBar/polaroidMain1.png";
import classes from "./Livebar.module.css";
import polaroidMini from "../../../../assets/institutionBarImg/iconLiveBar/polaroidMini.png";
import photoMini1 from "../../../../assets/institutionBarImg/photo/photoMini1.png";
import photoMini2 from "../../../../assets/institutionBarImg/photo/photoMini2.png";
import photoMini3 from "../../../../assets/institutionBarImg/photo/photoMini3.png";
import photoMini4 from "../../../../assets/institutionBarImg/photo/photoMini4.png";
import tape1 from "../../../../assets/institutionBarImg/iconLiveBar/miniTape1.svg";
import tape2 from "../../../../assets/institutionBarImg/iconLiveBar/miniTape2.svg";
import tape3 from "../../../../assets/institutionBarImg/iconLiveBar/miniTape3.svg";
const LivebarPhoto: FC = () => {
  // let tape = [tape1, tape2, tape3];
  // let mapPhoto = [photoMini1, photoMini2, photoMini3, photoMini4];
  // let mapPhoto = [
  //   {
  //     photo: photoMini1,
  //     tape: tape1,
  //     name: classes.photo1,
  //     polaroid: classes.polaroid1,
  //     tapeClass: classes.tape1,
  //   },
  //   {
  //     photo: photoMini2,
  //     tape: tape2,
  //     name: classes.photo2,
  //     polaroid: classes.polaroid2,
  //     tapeClass: classes.tape2,
  //   },
  //   {
  //     photo: photoMini3,
  //     tape: tape3,
  //     name: classes.photo3,
  //     polaroid: classes.polaroid3,
  //     tapeClass: classes.tape3,
  //   },
  //   {
  //     photo: photoMini4,
  //     name: classes.photo4,
  //     polaroid: classes.polaroid4,
  //   },
  // ];
  return (
    <div className={classes.photo}>
      <section>
        <article className={classes.bothPhoto}>
          <img src={polaroidMain1} width="100%" />
          <img src={photoMain} width="73%" className={classes.mainPhoto} />
          <img src={effectMain} width="73%" className={classes.mainPhoto} />
        </article>
        <article className={classes.photosAll}>
          <article>
            <img src={polaroidMini} className={classes.polaroid1} />
            <img src={photoMini1} className={classes.photo1} />
          </article>
          <img src={tape1} className={classes.tape1} />
          <article>
            <img src={polaroidMini} className={classes.polaroid2} />
            <img src={photoMini2} className={classes.photo2} />
          </article>
          <img src={tape2} className={classes.tape2} />
          <article>
            <img src={polaroidMini} className={classes.polaroid3} />
            <img src={photoMini3} className={classes.photo3} />
          </article>
          <img src={tape3} className={classes.tape3} />
          <article>
            <img src={polaroidMini} className={classes.polaroid4} />
            <img src={photoMini4} className={classes.photo4} />
          </article>
        </article>
      </section>
      <p className={classes.livebarTextMobile}>
        Лучше один раз увидеть, чем 100 раз прочитать или услышать! Приходите и
        ощутите уникальную ауру наших заведений!
      </p>
    </div>
  );
};
export { LivebarPhoto };
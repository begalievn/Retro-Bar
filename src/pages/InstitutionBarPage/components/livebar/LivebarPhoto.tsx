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
  //let mapPhoto = [photoMini1, photoMini2, photoMini3, photoMini4];
  return (
    <div className={classes.photo}>
      <section>
        <article className={classes.bothPhoto}>
          <img src={polaroidMain1} width="100%" />
          <img src={photoMain} width="73%" className={classes.mainPhoto} />
          <img src={effectMain} width="73%" className={classes.mainPhoto} />
        </article>
        <article className={classes.photosAll}>
          {/* {mapPhoto.map((el) => (
            <>
              <article>
                <img src={polaroidMini} className={classes.polaroid1} />
                <img src={photoMini1} className={classes.photo1} />
              </article>
              <img src={tape1} className={classes.tape1} />
            </>
          ))} */}
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

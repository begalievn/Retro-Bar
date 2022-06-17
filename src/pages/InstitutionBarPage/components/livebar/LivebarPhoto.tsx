import React, { FC } from "react";
import photoMain from "../../../../assets/institutionBarImg/photo/photoMain.png";
import effectMain from "../../../../assets/institutionBarImg/photo/effectMain.png";
import polaroidMain1 from "../../../../assets/institutionBarImg/iconLiveBar/polaroidMain1.png";
import classes from "./Livebar.module.css";
import polaroidMini from "../../../../assets/institutionBarImg/iconLiveBar/polaroidMini.png";
const LivebarPhoto: FC = () => {
  return (
    <div className={classes.photo}>
      <section>
        <article>
          <img src={polaroidMain1} width="100%" />
          <img src={photoMain} width="73%" className={classes.mainPhoto} />
          <img src={effectMain} width="73%" className={classes.mainPhoto} />
        </article>
        <article className={classes.photosAll}>
          <img src={polaroidMini} className={classes.photo1} />
          <img src={polaroidMini} className={classes.photo2} />
          <img src={polaroidMini} className={classes.photo3} />
          <img src={polaroidMini} className={classes.photo4} />
        </article>
      </section>
    </div>
  );
};
export { LivebarPhoto };

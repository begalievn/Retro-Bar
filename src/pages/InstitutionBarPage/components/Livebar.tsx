import React, { FC } from "react";
import barStyle from "../institutionBar.module.css";
import livebar from "../../../assets/institutionBarImg/iconLiveBar/livebar.png";
import polaroidMain from "../../../assets/institutionBarImg/iconLiveBar/polaroidMain.png";
import photoMain from "../../../assets/institutionBarImg/photo/photoMain.png";
import effectMain from "../../../assets/institutionBarImg/photo/effectMain.png";
import polaroidMain1 from "../../../assets/institutionBarImg/iconLiveBar/polaroidMain1.png";
import event from "../../../assets/institutionBarImg/iconLiveBar/events.svg";
import picture from "../../../assets/institutionBarImg/iconLiveBar/picture.svg";
import rating from "../../../assets/institutionBarImg/iconLiveBar/rating.svg";
import { Grid } from "@mui/material";

const LiveBarTS: FC = () => {
  return (
    <Grid container className={barStyle.livebarContainer}>
      <Grid item xs={12} md={5}>
        <Grid container className={barStyle.livebarLetfTop}>
          <Grid item xs={4} md={3}>
            <img src={livebar} width="85%" />
          </Grid>
          <Grid item xs={4} md={5} className={barStyle.livebar}>
            <p className={barStyle.livebarHeader}>LIVEBAR</p>
            <div className={barStyle.comments}>
              <img src={picture} />
              <p>150</p>
              <img src={event} />
              <p>2</p>
            </div>
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={rating} className={barStyle.rating} />
          </Grid>
        </Grid>
        <p>
          LiveBar, работая в ресторанной сфере уже свыше 11-ти лет является
          именем нарицательным. Несмотря на внушительную базу постоянных гостей
          мы неустанно работаем над привлечением новых адептов нашей концепции.
          Великолепный интерьер LiveBar с множеством оригинальных деталей дарит
          каждому гостю ощущение комфорта и настраивает на творческий подход…
          Уютная атмосфера обеспечивается своеобразным дизайном, хорошим
          музыкальным сопровождением и вниманием обходительного персонала.
          Разнообразные кухонное, барное, винное и кальянное меню заточены как
          под pre-party и after-party постоянных гостей так и под утончённых
          гурманов. Профессиональное караоке оборудование собрано из продукции
          лучших брендов производителей аудио оборудования и настроено
          профессионалами.
        </p>
        <p>
          Лучше один раз увидеть, чем 100 раз прочитать или услышать! Приходите
          и ощутите уникальную ауру наших заведений!
        </p>
      </Grid>
      <Grid item xs={12} md={7}>
        <section>
          <article>
            <img
              src={polaroidMain1}
              width="45%"
                className={barStyle.polaroidMainLivebar}
            />
            <img src={photoMain} width="33%" className={barStyle.mainPhoto} />
            {/* <img src={effectMain} width="55%" className={barStyle.mainPhoto} /> */}
          </article>
          {/* <article className={barStyle.photosAll}>
            <div className={barStyle.photo1}>
              <img
              src={miniPhoto1}
              width="115px"
              className={barStyle.miniPhoto1}
            />
            </div>
            <div className={barStyle.photo2}></div>
            <div className={barStyle.photo3}></div>
            <div className={barStyle.photo4}></div>
          </article> */}
        </section>
      </Grid>
    </Grid>
  );
};
export default LiveBarTS;

import { FC } from "react";
import { Grid } from "@mui/material";
import classes from "./Livebar.module.css";
import livebar from "../../../../assets/institutionBarImg/iconLiveBar/livebar.png";
import event from "../../../../assets/institutionBarImg/iconLiveBar/events.svg";
import picture from "../../../../assets/institutionBarImg/iconLiveBar/picture.svg";
import rating from "../../../../assets/institutionBarImg/iconLiveBar/rating.svg";
import share from "../../../../assets/institutionBarImg/iconLiveBar/share.svg";
const LivebarText: FC = () => {
  return (
    <div className={classes.text}>
      <Grid container className={classes.livebarLetfTop}>
        <Grid item xs={4} md={3}>
          <img src={livebar} width="100%" />
        </Grid>
        <Grid item xs={8} md={9} className={classes.livebar}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <p className={classes.livebarHeader}>LIVEBAR</p>
              <div className={classes.comments}>
                <img src={picture} />
                <p>150</p>
                <img src={event} />
                <p>2</p>
              </div>
            </Grid>

            <img src={rating} className={classes.rating} />
            <img src={share} width="12px" className={classes.share}/>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.livebarLetfBottom}>
        <p>
          LiveBar, работая в ресторанной сфере уже свыше 11-ти лет является
          именем нарицательным. Несмотря на внушительную базу постоянных гостей
          мы неустанно работаем над привлечением новых адептов нашей концепции.
        </p>
        <p>
          Великолепный интерьер LiveBar с множеством оригинальных деталей дарит
          каждому гостю ощущение комфорта и настраивает на творческий подход.
          Уютная атмосфера обеспечивается своеобразным дизайном, хорошим
          музыкальным сопровождением и вниманием обходительного персонала.
          Разнообразные кухонное, барное, винное и кальянное меню заточены как
          под pre-party и after-party постоянных гостей так и под утончённых
          гурманов. Профессиональное караоке оборудование собрано из продукции
          лучших брендов производителей аудио оборудования и настроено
          профессионалами.
        </p>
        <p className={classes.livebarTextWeb}>
          Лучше один раз увидеть, чем 100 раз прочитать или услышать! Приходите
          и ощутите уникальную ауру наших заведений!
        </p>
      </div>
    </div>
  );
};
export { LivebarText };

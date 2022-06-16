import React from "react";
import barStyle from "../institutionBar.module.css";

import livebar from "../../../assets/institutionBarImg/iconLiveBar/livebar.png";
import polaroidMain from "../../../assets/institutionBarImg/iconLiveBar/polaroidMain.png";
import photoMain from "../../../assets/institutionBarImg/photo/photoMain.png";
import effectMain from "../../../assets/institutionBarImg/photo/effectMain.png";
import polaroidMain1 from "../../../assets/institutionBarImg/iconLiveBar/polaroidMain1.png";

export default function LiveBar() {
  return (
    <div className={barStyle.flex}>
      <section className={barStyle.section_text}>
        <article className={barStyle.livebar}>
          <img src={livebar} width="120px" />
          <p>LIVEBAR</p>
        </article>
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
      </section>
      <section className={barStyle.section_photo}>
        <article className={barStyle.photo}>
          <div className={barStyle.tape1} />
          <div className={barStyle.tape2} />
          <img src={polaroidMain1} width="100%" />
          <img src={photoMain} width="405px" className={barStyle.mainPhoto} />
          <img src={effectMain} width="405px" className={barStyle.mainPhoto} />
        </article>
        <article className={barStyle.photosAll}>
          <div className={barStyle.photo1}>
            {/* <img
              src={miniPhoto1}
              width="115px"
              className={barStyle.miniPhoto1}
            /> */}
          </div>
          <div className={barStyle.photo2}></div>
          <div className={barStyle.photo3}></div>
          <div className={barStyle.photo4}></div>
        </article>
      </section>
    </div>
  );
}

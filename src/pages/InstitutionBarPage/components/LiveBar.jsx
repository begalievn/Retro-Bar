import React from "react";
import frame from "../../../assets/institutionBarImg/iconLiveBar/Frame.png";
import barStyle from "../institutionBar.module.css";
import frameOfPhoto from "../../../assets/institutionBarImg/iconLiveBar/polaroid.png";
export default function LiveBar() {
  return (
    <div className={barStyle.flex}>
      <section className={barStyle.section_text}>
        <article className={barStyle.livebar}>
          <img src={frame} width="120px" />
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
          <img src={frameOfPhoto} width="500px" />
        </article>
        <article className={barStyle.photosAll}>
          <div className={barStyle.photo1}></div>
          <div className={barStyle.photo2}></div>
          <div className={barStyle.photo3}></div>
          <div className={barStyle.photo4}></div>
        </article>
      </section>
    </div>
  );
}

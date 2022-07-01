import React from "react";
import styles from "./book.module.css";
import blackfilm from "../../assets/book/blackFilm.png";
import blackfilmgradientTop from "../../assets/book/blackFilmGradientTop.png";

import image from "../../assets/book/image.png";
import SubmitButton from "../SubmitButton/SubmitButton";

import sketchInstitutions from "../../assets/book/sketchInstitutions.png";
import sketchVideo from "../../assets/book/sketchVideo.png";
import { IBookData } from "../../types/bookTypes/bookTypes";
import Button from "../Button/Button";

type BookProps = {
  data?: IBookData;
  page: string;
};

function Book({
  data = {
    text: "Современные технологии достигли такого уровня, что перспективное планирование способствует.",
    title: "Связаться с заведением",
    image: image,
  },
  page,
}: BookProps) {
  const container = page === "main" ? styles.containerMain : styles.container;

  return (
    <section className={container}>
      {page === "institutions" && (
        <img
          className={styles.sketchInstitutions}
          src={sketchInstitutions}
          alt=""
        />
      )}
      {page === "video" && (
        <img className={styles.sketchVideo} src={sketchVideo} alt="" />
      )}

      <div className={styles.imageBlock}>
        <img src={data.image} className={styles.image} alt="" />
      </div>
      <div className={styles.contactBlock}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.text}>{data.text}</p>
        <Button size={"medium"}>Позвонить</Button>
      </div>
    </section>
  );
}

export default Book;

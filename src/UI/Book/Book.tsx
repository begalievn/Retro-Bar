import React from 'react';
import styles from './book.module.css';
import blackfilm from '../../assets/book/blackFilm.png';
import blackfilmgradientTop from '../../assets/book/blackFilmGradientTop.png';

import image from '../../assets/book/image.png';
import SubmitButton from '../SubmitButton/SubmitButton';

import sketchInstitutions from '../../assets/book/sketchInstitutions.png';
import sketchVideo from '../../assets/book/sketchVideo.png';
import { IBookData } from '../../types/bookTypes/bookTypes';
import Button from '../Button/Button';

type BookProps = {
  data?: IBookData | undefined;
  page: string;
};

function Book({ data, page }: BookProps) {
  let container = styles.container;

  if (page === 'main') container = styles.containerMain;
  if (page === 'video') container = styles.containerVideo;
  
  return (
    <section className={container}>
      {page === 'institution' && (
        <>
          <img
            className={styles.sketchInstitutions}
            src={sketchInstitutions}
            alt=""
          />
          <div className={styles.topGradient}></div>
          <div className={styles.bottomGradient}></div>
        </>
      )}
      {page === 'video' && (
        <>
          <img className={styles.sketchVideo} src={sketchVideo} alt="" />
          <div className={styles.bottomGradient}></div>
        </>
      )}

      <div className={styles.imageBlock}>
        <img src={data?.image} className={styles.image} alt="" />
      </div>
      <div className={styles.contactBlock}>
        <h2 className={styles.title}>{data?.title}</h2>
        <p className={styles.text}>{data?.text}</p>
        <SubmitButton  tel={data?.phoneNumber!} />
      </div>
    </section>
  );
}

export default Book;

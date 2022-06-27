import React from 'react';
import styles from './institutionPage.module.css'
import Top from './components/top/Top';
import Book from '../../UI/Book/Book';
import CalendarIcon from '../../UI/CalendarIcon/CalendarIcon';
import star from '../../assets/institution/star.svg'
import emoji from '../../assets/institution/emoji.svg'
import up from '../../assets/institution/up.svg'
import emojies from '../../assets/institution/emojies.svg'
import InstitutesSlider from '../../UI/InstitutesSlider/institutes-slider/InstitutesSlider';



let bookData = {

  text: ' технологии достигли такого уровня, что перспективное планирование способствует.',
  title: 'Зaказать съёмку',
  image: 'https://picsum.photos/1000'
}

const ToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const InstitutionPage = () => {
  return <div className={styles.back}>
    <CalendarIcon />
    <section className={styles.container}>

      <img className={styles.star} src={star} alt="" />
      <img className={styles.emoji} src={emoji} alt="" />
      <img className={styles.up} onClick={() => ToTop()} src={up} alt="" />
      <img className={styles.emojies} src={emojies} alt="" />
      <section className={styles.breadcrumbsCont}>
        <div className={styles.list}>

          <a href="/video">Топ заведения</a>
          <a href="/institution-bar">Заведения</a>
          <a href="/events">Локация</a>

        </div>
      </section>
      <Top />
      <InstitutesSlider />
      <Book page='institutions' data={bookData} />

    </section>

  </div>;
};

export default InstitutionPage;

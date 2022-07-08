import React from 'react';
import styles from './InstitutionPage.module.css';
import Top, { TopProps } from './components/top/Top';
import Book from '../../UI/Book/Book';
import CalendarIcon from '../../UI/CalendarIcon/CalendarIcon';
import star from '../../assets/institution/star.svg';
import emoji from '../../assets/institution/emoji.svg';
import up from '../../assets/institution/up.svg';
import emojies from '../../assets/institution/emojies.svg';
import InstitutesSlider from '../../UI/InstitutesSlider/institutes-slider/InstitutesSlider';
import { FooterEmoji } from '../../UI/FooterEmoji/FooterEmoji';
import { establishmentsAPI } from '../../store/features/establishments/establishmentsQuery';
import { getInstitudeSliderData } from '../../utils/helpers/getInstitudeSliderData';
import BottomEmojis from '../../UI/BottomEmojis/BottomEmojis';
import { advertisementsAPI } from '../../store/features/advertisement/advertisementsQuery';
import { getAdvertisementData } from '../../utils/helpers/getAdvertisementData';
import { getTopInstCardData } from '../../utils/helpers/getTopInstCardData';



const InstitutionPage = () => {
  const {
    data: establishments,
    error,
    isLoading: isEstablishmentsLoading,
  } = establishmentsAPI.useFetchAllEstablishmentsQuery('');
  

  const {
    data: advertisements,
    error: advertisementError,
    isLoading: advertisementIsLoading,
  } = advertisementsAPI.useFetchAllAdvertisementsQuery('');

  
  return (
    <div className={styles.back}>
      <CalendarIcon />
      <section className={styles.container}>
        <img className={styles.star} src={star} alt="" />
        <img className={styles.emoji} src={emoji} alt="" />
        <section className={styles.breadcrumbsCont}>
          <div className={styles.list}>
            <a href="/video">Топ заведения</a>
            <a href="/institution-bar">Заведения</a>
            <a href="/events">Локация</a>
          </div>
        </section>
        {isEstablishmentsLoading ? (
          <div>Loading...</div>
          ) : (
            <>
            <Top data={getTopInstCardData(establishments.establishments)[0]} />
          <InstitutesSlider
            data={getInstitudeSliderData(establishments.establishments)}
            isContentBlack={false}
          />
          </>
        )}
        {advertisementIsLoading ? (
          <p>Loading...</p>
        ) : (
          <Book
            page="institution"
            data={getAdvertisementData(advertisements.advertisements)}
          />
        )}

        <BottomEmojis />
      </section>
    </div>
  );
};

export default InstitutionPage;

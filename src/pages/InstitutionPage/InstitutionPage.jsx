import React from 'react';
import styles from './styles.module.css'

const InstitutionPage = () => {
  return <div className={styles.back}>
    <section className={styles.top}>
      <div className={styles.topHeader}>
        <h2>Топ заведения</h2>

      </div>
      <div className={styles.topPoster}>

      <div className={styles.topFilmBlock1}>
          <img className={styles.pic1} src="../../assets/institution/film1.png" alt="" />
      </div>
      <div className={styles.topFilmBlock2}>
        <img className={styles.pic2} src="../../assets/institution/film2.png" alt="" />
      </div>
      </div>
    </section>
    
  
  </div>;
};

export default InstitutionPage;

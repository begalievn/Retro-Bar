import React from 'react';
import tape2 from '../../../assets/eventsImages/tape2.png'
import tape1 from '../../../assets/eventsImages/tape 1.png'
import calendar from "../../../assets/icons/calendar-icon.svg";
import hero from '../../../assets/eventsImages/photo.png'
import banner from "../../../assets/eventsImages/ph banner.png";
import effect2 from '../../../assets/eventsImages/effect (3).png'
import style from '../eventPage.module.css';
import effect from '../../../assets/eventsImages/effect.png'

const Section1 = () => {
  return (<>
    <div className={style.eventPage_navbar} >
      <div>
        <span>Видео</span>
        <span>Услуги</span>
        <span>Плеер</span>
        <span>Галерея</span>
      </div>
    </div>


    {/* <div className={style.eventPage_section1_back}></div>
    <div className={style.eventPage_section1_back2}></div> */}
    <div className={style.eventPage_section1_back_ellipseGradient}>sdsdsd</div>

    <div className={style.eventPage_section1_container}>
      <img className={style.eventPage_section1_tape1} src={tape1} alt="" />
      <img className={style.eventPage_section1_tape2} src={tape2} alt="" />
      <img className={style.eventPage_section1_calendar} src={calendar} alt="calendar" />
    <div className={style.eventPage_section1}>
      <img className={style.eventPage_section1_image} src={hero} alt="Hero" />
      <img src={effect} className={style.eventPage_section1_effect} alt='' />

      <div className={style.eventPage_section1_text}>
        <div>
          <div >SUZIE WONG / OPENING | MOT </div>
          <p> 1 июля 2022</p>
        </div>

        <button className={style.eventPage_section1_button}>Купить билет</button>
      </div>
    </div>
    </div>

    <div className={style.eventPage_banner}><img src={banner} alt="banner" /><img src={effect2} alt="effect" /></div>
  </>);
};

export default Section1;
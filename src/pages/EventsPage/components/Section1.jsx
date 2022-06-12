import React from 'react';
import tape2 from '../../../assets/eventsImages/tape2.png'
import tape1 from '../../../assets/eventsImages/tape 1.png'
import calendar from "../../../assets/icons/calendar-icon.svg";
import style from '../eventPage.module.css'
const Section1 = () => {
  return (
    <div className={style.eventPage_section1} >
      <img className={style.eventPage_section1_tape1}  src={tape1} alt="" />
        <img className={style.eventPage_section1_tape2}  src={tape2} alt="" />
        <img className={style.eventPage_section1_calendar}  src={calendar} alt="" />
      <div className={style.eventPage_section1_image}>
        <div className={style.eventPage_section1_effect}>
        <div className={style.eventPage_section1_text}>
          <div> 
            <h3 >SUZIE WONG / OPENING | MOT </h3>
            <p> 1 июля 2022</p>
          </div>

          <button className={style.eventPage_section1_button}>Купить билет</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Section1;
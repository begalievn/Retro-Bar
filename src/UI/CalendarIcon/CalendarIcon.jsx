import React from 'react';

import style from './CalendarIcon.module.css';
import calendar from "../../assets/icons/calendar-icon.svg";


const CalendarIcon = () => {
  return (
    <div>
      <img className={style.calendarIcon} src={calendar} alt="calendar" />
    </div>
  );
};

export default CalendarIcon;


import React from 'react';
import BottomEmojis from '../../UI/BottomEmojis/BottomEmojis';
import CalendarIcon from '../../UI/CalendarIcon/CalendarIcon';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import style from './eventPage.module.css';
const EventsPage = () => {
  return <div className={style.eventPage_background} >
    <CalendarIcon/>
    <Section1/>
    <Section2/>
    <BottomEmojis/>
  </div>;
  
};

export default EventsPage;

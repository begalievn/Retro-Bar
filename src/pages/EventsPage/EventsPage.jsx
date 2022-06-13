import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import style from './eventPage.module.css';
const EventsPage = () => {
  return <div className={style.eventPage_background} >
    <Section1/>
    {/* <Section2/> */}
  </div>;
  
};

export default EventsPage;

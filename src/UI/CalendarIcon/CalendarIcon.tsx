import React from 'react';

import style from './CalendarIcon.module.css';
import calendar from "../../assets/icons/calendar-icon.svg";
import CalendarModal from '../CalendarModal/CalendarModal';


const CalendarIcon = () => {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => setModal(!modal);

  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      <div onClick={toggleModal}>
        <img className={style.calendarIcon} src={calendar} alt="calendar" />
      </div>
      {modal && <CalendarModal modal={modal} toggleModal={toggleModal} />}
    </>
  );
};

export default CalendarIcon;


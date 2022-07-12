import React, { useRef } from "react";

import style from "./CalendarIcon.module.css";
import calendar from "../../assets/icons/calendar.png";
import CalendarModal from "../CalendarModal/CalendarModal";

const CalendarIcon = () => {
  const [modal, setModal] = React.useState(false);
  const refModal = useRef<HTMLDivElement>(null);

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
      <CalendarModal modal={modal} toggleModal={toggleModal} />
    </>
  );
};

export default CalendarIcon;

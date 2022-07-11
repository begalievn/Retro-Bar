import React, { FC, useEffect, useState } from "react";
import styles from "./CalendarModal.module.css";

import {Button} from "../../UI";
import { Calendar, CalendarEvents, CalendarFilter } from "./";
import { formatDate } from "../../utils/helpers/date";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { filterCalendarFunc } from "../../utils/helpers/filterCalendar";

interface CalendarModalProps {
  modal: boolean;
  toggleModal: () => void;
}

const CalendarModal: FC<CalendarModalProps> = ({ modal, toggleModal }) => {
  const [selectedDate, setSelectedDay] = useState(new Date());
  const dispatch = useAppDispatch();
  // const toggler = (e:React.MouseEvent<HTMLDivElement>)=>{
  //   e.currentTarget.style.display = 'none'
  //   e.stopPropagation()
  // }

  useEffect(() => {
    dispatch(filterCalendarFunc(formatDate(selectedDate, "DD-MM-YYYY")));
  }, [selectedDate]);

  return (
    <>
      {modal && (
        <div className={styles.modal} >
          {/*<div onClick={toggleModal} className={styles.overlay}></div>*/}
          <div className={styles.modal_content}>
            <div className={styles.headerContent}>
              <CalendarFilter />
                <button className={styles.closeBtn} onClick={toggleModal}>✖</button>
            </div>
            <div className={styles.calendarWithPhotos}>
              <div className={styles.calendar}>
                <Calendar
                  selectedDate={selectedDate}
                  selectDate={(date) => setSelectedDay(date)}
                />
              </div>
              <div className={styles.calendar_events}>
                <CalendarEvents />
              </div>
            </div>
            {/*<div className={styles.btnClose} onClick={toggleModal}></div>*/}
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarModal;

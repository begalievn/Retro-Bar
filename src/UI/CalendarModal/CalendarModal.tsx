import React, { FC, useState } from "react";
import Calendar from "./Calendar/Calendar";
import CalendarEvents from "./CalendarEvents/CalendarEvents";
import CalendarFilter from "./CalendarFilter/CalendarFilter";
import styles from "./CalendarModal.module.css";

interface CalendarModalProps {
  modal: boolean;
  toggleModal: () => void;
}

const CalendarModal: FC<CalendarModalProps> = ({ modal, toggleModal }) => {
  const [selectedDate, setSelectedDay] = useState(new Date());

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <CalendarFilter />
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
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarModal;

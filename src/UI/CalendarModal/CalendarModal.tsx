import React, { FC, RefObject, useEffect, useState } from "react";
import styles from "./CalendarModal.module.css";

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

  useEffect(() => {
    dispatch(filterCalendarFunc(formatDate(selectedDate, 'YYYY-MM-DD')));
  }, [selectedDate]);

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.container}>
            <div className={styles.modal_content}>
              <div className={styles.headerContent}>
                <CalendarFilter />
                <button className={styles.closeBtn} onClick={toggleModal}>
                  ✖
                </button>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarModal;

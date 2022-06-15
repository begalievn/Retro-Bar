import React, { FC } from "react";
import { createMonth } from "../../../../utils/helpers/date/createMonth";
import styles from "./Calendar.module.css";
import { useCalendar } from "./hooks/useCalendar";

interface CalendarProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  firstWeekDayNumber?: number;
}
const Calendar: FC<CalendarProps> = ({
  locale = "default",
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  });
  console.log(createMonth());

  return <div>Calendar</div>;
};

export default Calendar;

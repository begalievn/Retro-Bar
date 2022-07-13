import React, { FC } from 'react';
import InputSearch from '../../../UI/InputSearch/InputSearch';
import { useCalendar } from './hooks/useCalendar';
import arrowLeft from '../../../assets/photoPageImages/calendarImages/arrow left.svg';
import arrowRight from '../../../assets/photoPageImages/calendarImages/arrow right.svg';
import arrowDown from '../../../assets/photoPageImages/calendarImages/arrow down.svg';
import tape from '../../../assets/photoPageImages/calendarImages/tape.png';

import {
  checkDateIsEqual,
  checkIsToday,
  formatDate,
} from '../../../utils/helpers/date';
import './Calendar.css';
interface CalendarProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  firstWeekDayNumber?: number;
}
const Calendar: FC<CalendarProps> = ({
  locale = 'default',
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  });

  const addZeroToStart = (num: number) => {
    if (num < 10) return `0${num}`;
    else return num;
  };

  return (
    <div className="calendar">
      <img className="calendar_tape" src={tape} alt="" /> 
      <div className="calendar__header">
        
        <div className="calendar__header__info">
          <div
            onClick={() => functions.onClickArrow('left')}
            aria-hidden
            className="calendar__header__arrow__left"
          >
            <img src={arrowLeft} alt="" />
          </div>
          {state.mode === 'days' && (
            <div className="calendar__header__info__intro">
              <h3 className="calendar__header__info__intro__title">
                {state.monthesNames[state.selectedMonth.monthIndex].month}
              </h3>
              <span
                className="calendar__header__arrow__down"
                onClick={() => functions.setMode('monthes')}
              >
                <img src={arrowDown} alt="" />
              </span>
            </div>
          )}
          {state.mode === 'monthes' && (
            <div className="calendar__header__info__intro" aria-hidden>
              <h3 className="calendar__header__info__intro__title">
                {state.selectedYear}
              </h3>
              <span
                className="calendar__header__arrow__down"
                onClick={() => functions.setMode('years')}
              >
                <img src={arrowDown} alt="" />
              </span>
            </div>
          )}
          {state.mode === 'years' && (
            <div className="calendar__header__info__intro">
              <h3 className="calendar__header__info__intro__title">
                {state.selectedYearsInterval[0]} -{' '}
                {
                  state.selectedYearsInterval[
                    state.selectedYearsInterval.length - 1
                  ]
                }
              </h3>
              <span
                className="calendar__header__arrow__down"
                onClick={() => functions.setMode('days')}
              >
                <img src={arrowDown} alt="" />
              </span>
            </div>
          )}
          <div
            onClick={() => functions.onClickArrow('right')}
            aria-hidden
            className="calendar__header__arrow__right"
          >
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className="calendar__body">
        {state.mode === 'days' && (
          <>
            <div className="calendar__week">
              {state.weekDaysNames.map((weekDaysName) => (
                <div
                  className="calendar__week__names"
                  key={weekDaysName.dayShort}
                >
                  {weekDaysName.dayShort}
                </div>
              ))}
            </div>
            <div className="calendar__days">
              {state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDay.date
                );
                const isAdditionalDay =
                  day.monthIndex !== state.selectedMonth.monthIndex;

                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedDay(day);
                      selectDate(day.date);
                    }}
                    className={[
                      'calendar__day',
                      isToday ? 'calendar__today__item' : '',
                      isSelectedDay ? 'calendar__selected__item' : '',
                      isAdditionalDay ? 'calendar__additional__day' : '',
                    ].join(' ')}
                  >
                    {addZeroToStart(day.dayNumber)}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {state.mode === 'monthes' && (
          <div className="calendar__pick__items__container">
            {state.monthesNames.map((monthesName) => {
              const isCurrentMonth =
                new Date().getMonth() === monthesName.monthIndex &&
                state.selectedYear === new Date().getFullYear();
              const isSelectedMonth =
                monthesName.monthIndex === state.selectedMonth.monthIndex;

              return (
                <div
                  key={monthesName.month}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedMonthByIndex(monthesName.monthIndex);
                    functions.setMode('days');
                  }}
                  className={[
                    'calendar__pick__item',
                    isSelectedMonth ? 'calendar__selected__item' : '',
                    isCurrentMonth ? 'calendar__today__item' : '',
                  ].join(' ')}
                >
                  {monthesName.monthShort}
                </div>
              );
            })}
          </div>
        )}

        {state.mode === 'years' && (
          <div className="calendar__pick__items__container">
            <div className="calendar__unchoosable__year">
              {state.selectedYearsInterval[0] - 1}
            </div>
            {state.selectedYearsInterval.map((year) => {
              const isCurrentYear = new Date().getFullYear() === year;
              const isSelectedYear = year === state.selectedYear;

              return (
                <div
                  key={year}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedYear(year);
                    functions.setMode('monthes');
                  }}
                  className={[
                    'calendar__pick__item',
                    isCurrentYear ? 'calendar__today__item' : '',
                    isSelectedYear ? 'calendar__selected__item' : '',
                  ].join(' ')}
                >
                  {year}
                </div>
              );
            })}
            <div className="calendar__unchoosable__year">
              {state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ] + 1}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;

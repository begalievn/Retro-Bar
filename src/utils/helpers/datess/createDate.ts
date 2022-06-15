import { getWeekNumber } from "./getWeekNumber";

interface CreateDateParams {
  locale?: string;
  date?: Date;
}

export const createDate = (params?: CreateDateParams) => {
  const locale = params?.locale ?? "default";

  const d = params?.date ?? new Date();
  const dayNumber = d.getDate();
  const day = d.toLocaleDateString(locale, { weekday: "long" });
  const dayNumberInWeek = d.getDate() + 1;
  const dayShort = d.toLocaleDateString(locale, { weekday: "short" });
  const year = d.getFullYear();
  const shortYear = d.toLocaleDateString(locale, { year: "2-digit" });
  const month = d.toLocaleDateString(locale, { month: "long" });
  const shortMonth = d.toLocaleDateString(locale, { month: "short" });
  const monthNumber = d.getMonth() + 1;
  const monthIndex = d.getMonth();
  const timestamp = d.getTime();
  const week = getWeekNumber(d);

  return {
    date:d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    shortYear,
    month,
    shortMonth,
    monthNumber,
    monthIndex,
    timestamp,
    week,
  };
};

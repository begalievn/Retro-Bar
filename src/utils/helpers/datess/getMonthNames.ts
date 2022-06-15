import { createDate } from './createDate';
export const getMonthNames = (locale: string = 'default') => {
  const monthesNames : {
    month: ReturnType<typeof createDate>['month']
    shortMonth: ReturnType<typeof createDate>['shortMonth']
    monthIndex: ReturnType<typeof createDate>['monthIndex']
    date: ReturnType<typeof createDate>['date']
  }[] = Array.from({length:12})

  const d = new Date()

  monthesNames.forEach((_, i) => {
    const { month, monthIndex, shortMonth, date } = createDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth() + i, 1)
    });

    monthesNames[monthIndex] = { month, monthIndex, shortMonth, date };
  });


  return monthesNames
}
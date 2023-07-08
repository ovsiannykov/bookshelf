import getDate from 'date-fns/getDate';

const getFormatHandler =
  (dateFormat: Intl.DateTimeFormat) =>
  (date: string | null | undefined | Date) =>
    dateFormat.format(getDate(date));

function useDateFormatters() {
  const dayShortMonth = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
  });
  const weekdayDayShortMonthYear = new Intl.DateTimeFormat('en', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const dayShortMonthTime = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
  });
  const dayShortMonthYearTime = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
  const dayShortMonthYear = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return {
    dayShortMonth: getFormatHandler(dayShortMonth),
    dayShortMonthTime: getFormatHandler(dayShortMonthTime),
    dayShortMonthYearTime: getFormatHandler(dayShortMonthYearTime),
    dayShortMonthYear: getFormatHandler(dayShortMonthYear),
    weekdayDayShortMonthYear: getFormatHandler(weekdayDayShortMonthYear),
  } as const;
}

export default useDateFormatters;

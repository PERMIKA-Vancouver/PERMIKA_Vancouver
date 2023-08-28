import dayjs, { Dayjs } from 'dayjs';

export function getRemainingTimeUntilTimestamp(timestampDayJs: Dayjs) {
  const nowDayjs = dayjs();

  if (timestampDayJs.isBefore(nowDayjs)) {
    return {
      minutes: '00',
      hours: '00',
      days: '00',
      months: '00',
    };
  }

  return {
    minutes: getRemainingMinutes(nowDayjs, timestampDayJs).toString(),
    hours: getRemainingHours(nowDayjs, timestampDayJs).toString(),
    days: getRemainingDays(nowDayjs, timestampDayJs).toString(),
    months: getRemainingMonths(nowDayjs, timestampDayJs).toString(),
  };
}

function getRemainingMinutes(nowDayjs: Dayjs, timestampDayJs: Dayjs) {
  const minutes = timestampDayJs.diff(nowDayjs, 'minutes') % 60;
  return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs: Dayjs, timestampDayJs: Dayjs) {
  const hours = timestampDayJs.diff(nowDayjs, 'hours') % 24;
  return padWithZeros(hours, 2);
}

function getRemainingDays(nowDayjs: Dayjs, timestampDayJs: Dayjs) {
  const days = timestampDayJs.diff(nowDayjs, 'days');
  return padWithZeros(days, 2);
}

function getRemainingMonths(nowDayjs: Dayjs, timestampDayJs: Dayjs) {
  const months = timestampDayJs.diff(nowDayjs, 'months');
  return padWithZeros(months, 2);
}

function padWithZeros(time: number, minLength: number) {
  const timeString = time.toString();
  return timeString.length >= minLength
    ? timeString
    : '0'.repeat(minLength - timeString.length) + timeString;
}

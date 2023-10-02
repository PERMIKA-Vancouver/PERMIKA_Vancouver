import dayjs, { Dayjs } from 'dayjs';
import { DATE_FORMAT } from '../data/events';

export function getRemainingTimeUntilTimestamp(timestamp: string) {
  const timestampDayJs = dayjs(timestamp, DATE_FORMAT);
  const nowDayjs = dayjs();

  if (timestampDayJs.isBefore(nowDayjs)) {
    return {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00',
    };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayJs).toString(),
    minutes: getRemainingMinutes(nowDayjs, timestampDayJs).toString(),
    hours: getRemainingHours(nowDayjs, timestampDayJs).toString(),
    days: getRemainingDays(nowDayjs, timestampDayJs).toString(),
  };
}

function getRemainingSeconds(nowDayjs: Dayjs, timestampDayJs: Dayjs) {
  const seconds = timestampDayJs.diff(nowDayjs, 'seconds') % 60;
  return padWithZeros(seconds, 2);
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

function padWithZeros(time: number, minLength: number) {
  const timeString = time.toString();
  return timeString.length >= minLength
    ? timeString
    : '0'.repeat(minLength - timeString.length) + timeString;
}

import dayjs from 'dayjs';
import {
  DATE_FORMAT,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
} from '../data/events';
import { UpcomingEvent } from '../types/types';

export const getNextEvent = (): UpcomingEvent => {
  let nextEvent = UPCOMING_EVENTS_DEFAULT;

  for (let i = 0; i < UPCOMING_EVENTS.length; i++) {
    if (!checkDatePassed(UPCOMING_EVENTS[i].date)) {
      nextEvent = UPCOMING_EVENTS[i];
      break;
    }
  }

  return nextEvent;
};

export const isNextEvent = (event: UpcomingEvent): boolean => {
  return event !== UPCOMING_EVENTS_DEFAULT;
};

export const getEventName = (event: UpcomingEvent): string => {
  return event.name;
};

export const getEventTimestamp = (event: UpcomingEvent): string => {
  return event.date;
};

export const getEventMonthDate = (event: UpcomingEvent): string => {
  return event === UPCOMING_EVENTS_DEFAULT ? '' : toStringMonthDate(event.date);
};

export const getEventFullDate = (event: UpcomingEvent): string => {
  return event === UPCOMING_EVENTS_DEFAULT ? '' : toStringFullDate(event.date);
};

export const getEventRsvp = (event: UpcomingEvent): string => {
  return event.rsvp;
};

export const getEventLocation = (event: UpcomingEvent) => {
  return [event.location, event.locationLink];
};

// PRIVATE HELPER
const checkDatePassed = (date: string): boolean => {
  return dayjs(date, DATE_FORMAT).isBefore(dayjs());
};

const toStringMonthDate = (date: string): string => {
  const month = parseInt(date.substring(5, 7));
  const day = parseInt(date.substring(8, 10));

  const newDate = new Date();
  newDate.setMonth(month - 1);

  return newDate.toLocaleString('en-US', { month: 'long' }) + ' ' + day;
};

const toStringFullDate = (date: string): string => {
  const newDate = new Date(date);

  const weekday = newDate.toLocaleDateString('en-US', { weekday: 'long' });
  const month = newDate.toLocaleDateString('en-US', { month: 'long' });
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return weekday + ', ' + month + ' ' + day + ', ' + year;
};

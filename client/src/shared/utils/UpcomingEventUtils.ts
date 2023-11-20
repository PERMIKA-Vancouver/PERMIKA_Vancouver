import dayjs from 'dayjs';
import {
  DATE_FORMAT,
  EVENT_BUTTON,
  EVENT_DESCRIPTION,
  RANTANGAN_BUTTON,
  RANTANGAN_DESCRIPTION,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
} from '../data/events';
import { UpcomingEvent } from '../types/types';

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

const getNextEvent = () => {
  let nextEvent = UPCOMING_EVENTS_DEFAULT;

  for (let i = 0; i < UPCOMING_EVENTS.length; i++) {
    if (!checkDatePassed(UPCOMING_EVENTS[i].date)) {
      nextEvent = UPCOMING_EVENTS[i];
      break;
    }
  }

  const isNextEvent = isNextEvents(nextEvent);
  const nextEventName: string = getNextEventName(nextEvent);
  const nextEventTimestamp: string = getNextEventTimestamp(nextEvent);
  const nextEventDate: string = getNextEventDate(nextEvent);
  const nextEventDescription: string = getNextEventDescription(nextEvent);
  const nextEventButtonText: string = getNextEventButtonText(nextEvent);
  const nextEventLink: string = getNextEventLink(nextEvent);

  return [
    isNextEvent,
    nextEventName,
    nextEventTimestamp,
    nextEventDate,
    nextEventDescription,
    nextEventButtonText,
    nextEventLink,
  ];
};

export { checkDatePassed, toStringMonthDate, getNextEvent };

// PRIVATE METHODS
const isNextEvents = (nextEvent: UpcomingEvent): string => {
  return nextEvent === UPCOMING_EVENTS_DEFAULT ? 'false' : 'true';
};

const getNextEventName = (nextEvent: UpcomingEvent): string => {
  return nextEvent.name;
};

const getNextEventTimestamp = (nextEvent: UpcomingEvent): string => {
  return nextEvent.date;
};

const getNextEventDate = (nextEvent: UpcomingEvent): string => {
  return nextEvent === UPCOMING_EVENTS_DEFAULT
    ? ''
    : toStringMonthDate(nextEvent.date);
};

const getNextEventDescription = (nextEvent: UpcomingEvent): string => {
  return nextEvent.type ? RANTANGAN_DESCRIPTION : EVENT_DESCRIPTION;
};

const getNextEventButtonText = (nextEvent: UpcomingEvent): string => {
  return nextEvent.type ? RANTANGAN_BUTTON : EVENT_BUTTON;
};

const getNextEventLink = (nextEvent: UpcomingEvent): string => {
  return nextEvent.rsvp;
};

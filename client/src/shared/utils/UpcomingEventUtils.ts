import dayjs from 'dayjs';
import {
  DATE_FORMAT,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
} from '../data/events';
import { UpcomingEvent } from '../types/types';

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
  const nextEventLink: string = getNextEventLink(nextEvent);

  return [
    isNextEvent,
    nextEventName,
    nextEventTimestamp,
    nextEventDate,
    nextEventLink,
  ];
};

export { getNextEvent };

// PRIVATE HELPER METHODS
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

const getNextEventLink = (nextEvent: UpcomingEvent): string => {
  return nextEvent.rsvp;
};

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

// ARCHIVE
// const getNextEvents = (): number[] => {
//   const nextEvents: number[] = [];
//   for (let i = 0; i < UPCOMING_EVENTS.length; i++) {
//     if (!checkDatePassed(UPCOMING_EVENTS[i].date)) nextEvents.push(i);
//   }

//   if (nextEvents.length === 0) nextEvents.push(-1);

//   return nextEvents;
// };

// const isNextEvents = (index: number): string => {
//   return index === -1 ? 'false' : 'true';
// };

// const getNextEventName = (index: number): string => {
//   return index === -1
//     ? UPCOMING_EVENTS_DEFAULT.name
//     : UPCOMING_EVENTS[index].name;
// };

// const getNextEventTimestamp = (index: number): string => {
//   return index === -1
//     ? UPCOMING_EVENTS_DEFAULT.date
//     : UPCOMING_EVENTS[index].date;
// };

// const getNextEventDate = (index: number): string => {
//   return index === -1 ? '' : toStringMonthDate(UPCOMING_EVENTS[index].date);
// };

// const getNextEventDescription = (index: number): string => {
//   return UPCOMING_EVENTS[index].type
//     ? RANTANGAN_DESCRIPTION
//     : EVENT_DESCRIPTION;
// };

// const getNextEventButtonText = (index: number): string => {
//   return UPCOMING_EVENTS[index].type ? RANTANGAN_BUTTON : EVENT_BUTTON;
// };

// const getNextEventLink = (index: number): string => {
//   return UPCOMING_EVENTS[index].rsvp;
// };

// export {
//   getNextEvents,
//   isNextEvents,
//   getNextEventName,
//   getNextEventTimestamp,
//   getNextEventDate,
//   getNextEventDescription,
//   getNextEventButtonText,
//   getNextEventLink,
// };

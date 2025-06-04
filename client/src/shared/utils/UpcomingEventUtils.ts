import dayjs from 'dayjs';
import {
  DATE_FORMAT,
  EVENT_BUTTON,
  EVENT_DESCRIPTION,
  HIRING_BUTTON,
  HIRING_DESCRIPTION,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
} from '../data/events';

const getNextEvents = (): number[] => {
  const nextEvents: number[] = [];
  for (let i = 0; i < UPCOMING_EVENTS.length; i++) {
    if (!checkDatePassed(UPCOMING_EVENTS[i].date)) nextEvents.push(i);
  }

  if (nextEvents.length === 0) nextEvents.push(-1);

  return nextEvents;
};

const isNextEvents = (index: number): boolean => {
  return index !== -1;
};

const getNextEventName = (index: number): string => {
  return index === -1
    ? UPCOMING_EVENTS_DEFAULT.name
    : UPCOMING_EVENTS[index].name;
};


const getNextEventTimestamp = (index: number): string => {
  return index === -1
    ? UPCOMING_EVENTS_DEFAULT.date
    : UPCOMING_EVENTS[index].date;
};

const getNextEventDate = (index: number): string => {
  return index === -1 ? '' : toStringMonthDate(UPCOMING_EVENTS[index].date);
};

export const getNextEventFullDate = (index: number): string => {
  return index === -1 ? '' : toStringFullDate(UPCOMING_EVENTS[index].date);
};

const getNextEventDescription = (index: number): string => {
  return UPCOMING_EVENTS[index].type ? HIRING_DESCRIPTION : EVENT_DESCRIPTION;
};

const getNextEventButtonText = (index: number): string => {
  return UPCOMING_EVENTS[index].type ? HIRING_BUTTON : EVENT_BUTTON;
};

const getNextEventLink = (index: number): string => {
  return UPCOMING_EVENTS[index].rsvp;
};

const getEventLocation = (index: number) => {
  return [UPCOMING_EVENTS[index].location, UPCOMING_EVENTS[index].locationLink];
};

const getEventType = (index: number) => {
  return [UPCOMING_EVENTS[index].type];
};

export {
  getNextEvents,
  isNextEvents,
  getNextEventName,
  getNextEventTimestamp,
  getNextEventDate,
  getNextEventDescription,
  getNextEventButtonText,
  getNextEventLink,
  getEventLocation,
  getEventType,
};

// PRIVATE HELPER METHODS
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

// ARCHIVE
// const getNextEvent = (index: number) => {
//   let nextEvent = UPCOMING_EVENTS_DEFAULT;

//   for (let i = 0; i < UPCOMING_EVENTS.length; i++) {
//     if (!checkDatePassed(UPCOMING_EVENTS[i].date)) {
//       nextEvent = UPCOMING_EVENTS[i];
//       break;
//     }
//   }

//   const isNextEvent = isNextEvents(nextEvent);
//   const nextEventName: string = getNextEventName(nextEvent);
//   const nextEventTimestamp: string = getNextEventTimestamp(nextEvent);
//   const nextEventDate: string = getNextEventDate(nextEvent);
//   const nextEventDescription: string = getNextEventDescription(nextEvent);
//   const nextEventButtonText: string = getNextEventButtonText(nextEvent);
//   const nextEventLink: string = getNextEventLink(nextEvent);

//   return [
//     isNextEvent,
//     nextEventName,
//     nextEventTimestamp,
//     nextEventDate,
//     nextEventDescription,
//     nextEventButtonText,
//     nextEventLink,
//   ];
// };

// const isNextEvents = (nextEvent: UpcomingEvent): string => {
//   return nextEvent === UPCOMING_EVENTS_DEFAULT ? 'false' : 'true';
// };

// const getNextEventName = (nextEvent: UpcomingEvent): string => {
//   return nextEvent.name;
// };

// const getNextEventTimestamp = (nextEvent: UpcomingEvent): string => {
//   return nextEvent.date;
// };

// const getNextEventDate = (nextEvent: UpcomingEvent): string => {
//   return nextEvent === UPCOMING_EVENTS_DEFAULT
//     ? ''
//     : toStringMonthDate(nextEvent.date);
// };

// const getNextEventDescription = (nextEvent: UpcomingEvent): string => {
//   return nextEvent.type ? RANTANGAN_DESCRIPTION : EVENT_DESCRIPTION;
// };

// const getNextEventButtonText = (nextEvent: UpcomingEvent): string => {
//   return nextEvent.type ? RANTANGAN_BUTTON : EVENT_BUTTON;
// };

// const getNextEventLink = (nextEvent: UpcomingEvent): string => {
//   return nextEvent.rsvp;
// };

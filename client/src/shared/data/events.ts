import { UpcomingEvent } from '../types/types';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'Waroeng Soto Madura',
    date: '2023-11-22 23:59',
    rsvp: 'https://docs.google.com/forms/d/e/1FAIpQLScFf8FnSkpjzGEQMW5MGE6FjgiLo14AvmiIo_-UqdvQRxWQGg/viewform',
    type: 1,
  },
  {
    name: 'KOMPAS: Navigating Job Search in Canada',
    date: '2023-11-25 16:00',
    rsvp: 'https://forms.gle/S2cMcmNzERSncudx8',
    type: 0,
  },
];

const UPCOMING_EVENTS_DEFAULT: UpcomingEvent = {
  name: 'No Upcoming Events',
  date: '0000-00-00 00:00',
  rsvp: '',
  type: 0,
};

const EVENT_DESCRIPTION = 'Save yourself a seat for the event below!';
const EVENT_BUTTON = 'RSVP';

const RANTANGAN_DESCRIPTION =
  "Savor the flavor, seize the moment, order Waroeng before they're all gone!";
const RANTANGAN_BUTTON = 'Pre-order';

export {
  DATE_FORMAT,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
  EVENT_DESCRIPTION,
  EVENT_BUTTON,
  RANTANGAN_DESCRIPTION,
  RANTANGAN_BUTTON,
};

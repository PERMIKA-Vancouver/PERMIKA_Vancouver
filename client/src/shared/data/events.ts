import { UpcomingEvent } from '../types/types';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'Waroeng Soto Madura',
    date: '2023-11-22 23:59',
    rsvp: 'https://docs.google.com/forms/d/e/1FAIpQLScFf8FnSkpjzGEQMW5MGE6FjgiLo14AvmiIo_-UqdvQRxWQGg/viewform',
  },
];

const UPCOMING_EVENTS_DEFAULT: UpcomingEvent = {
  name: 'No Upcoming Events',
  date: '0000-00-00 00:00',
  rsvp: '',
};

export { DATE_FORMAT, UPCOMING_EVENTS, UPCOMING_EVENTS_DEFAULT };

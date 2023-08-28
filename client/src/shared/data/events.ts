import { UpcomingEvent } from '../types/types';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'Pre-departure Orientation',
    date: '2023-06-15 10:00',
    rsvp: '',
  },
  {
    name: 'Welcoming Party',
    date: '2023-09-16 09:00',
    rsvp: 'https://www.linkedin.com/in/julian-widjaja/',
  },
];

const UPCOMING_EVENTS_DEFAULT: UpcomingEvent = {
  name: 'No Upcoming Events',
  date: '0000-00-00 00:00',
  rsvp: '',
};

export { DATE_FORMAT, UPCOMING_EVENTS, UPCOMING_EVENTS_DEFAULT };

import { UpcomingEvent } from '../types/types';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'Layar Tancap',
    date: '2023-10-21 18:30',
    rsvp: 'https://forms.gle/QxhUzh8JXhb5zMmUA',
  },
];

const UPCOMING_EVENTS_DEFAULT: UpcomingEvent = {
  name: 'No Upcoming Events',
  date: '0000-00-00 00:00',
  rsvp: '',
};

export { DATE_FORMAT, UPCOMING_EVENTS, UPCOMING_EVENTS_DEFAULT };

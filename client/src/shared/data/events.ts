import { UpcomingEvent } from '../types/types';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'Waroeng Rawon',
    date: '2024-01-28 17:00',
    rsvp: 'https://forms.gle/p9tdTPB8GXAkU9cNA',
    type: 1,
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

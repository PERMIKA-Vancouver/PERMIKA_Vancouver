import { UpcomingEvent } from '../types/types';
const { DateTime } = require('luxon');

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'PERMIKA Hiring',
    date: '2024-05-13 23:59',
    rsvp: 'https://docs.google.com/forms/d/e/1FAIpQLSc8ZMQzcCdszKmZICP2SHmZtN2Dg56Y6Or_sUJJ69jG01U17w/viewform',
    location: '',
    locationLink: '',
    type: 1,
  },
];

const UPCOMING_EVENTS_DEFAULT: UpcomingEvent = {
  name: 'PRE-DEPARTURE ORIENTATION & MERCH SALE',
  date: DateTime.fromFormat('2024-07-07 20:00', 'yyyy-MM-dd HH:mm', { zone: 'America/Los_Angeles' }).toString(),
  rsvp: '',
  location: '',
  locationLink: '',
  type: 0,
};

const EVENT_DESCRIPTION = 'Save yourself a seat for the event below!';
const EVENT_BUTTON = 'RSVP';

const HIRING_DESCRIPTION = "Be part of PERMIKA's family 2024/2025";
const HIRING_BUTTON = 'Join PERMIKA';

export {
  DATE_FORMAT,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
  EVENT_DESCRIPTION,
  EVENT_BUTTON,
  HIRING_DESCRIPTION,
  HIRING_BUTTON,
};

import { UpcomingEvent } from '../types/types';
const { DateTime } = require('luxon');
const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'Click HERE for Hiring Package',
    date: DateTime.fromFormat('2025-05-06 10:00', 'yyyy-MM-dd HH:mm', {
      zone: 'America/Los_Angeles',
    }).toString(),
    rsvp: 'https://forms.gle/EY9UtPCBaZH7eFEKA',
    location: '',
    locationLink: '',
    type: 0,
  },
];

const UPCOMING_EVENTS_DEFAULT: UpcomingEvent = {
  name: 'No Upcoming Events',
  date: '0000-00-00 00:00',
  rsvp: '',
  location: '',
  locationLink: '',
  type: 0,
};

const HIRING_DESCRIPTION = "";
const HIRING_BUTTON = 'Join PERMIKA';

const EVENT_DESCRIPTION = HIRING_DESCRIPTION;
const EVENT_BUTTON = HIRING_BUTTON;

export {
  DATE_FORMAT,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
  EVENT_DESCRIPTION,
  EVENT_BUTTON,
  HIRING_DESCRIPTION,
  HIRING_BUTTON,
};

import { UpcomingEvent } from '../types/types';
const { DateTime } = require('luxon');
const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: 'Click HERE for Hiring Package',
    hiringPackageLink:'https://drive.google.com/file/d/1uLbuKrkJZpEutu27KBCSrdjkOmwgWrtk/view?fbclid=PAZXh0bgNhZW0CMTEAAadQNkMxc2D_he2k9BJdo9cEfh-4fsf8Go2nTuSBrmcELYrnaMlIhTSosSTjhQ_aem_4HceJkQ-gFwN3JE3Gez4xQ',
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
  hiringPackageLink: '',
  date: '0000-00-00 00:00',
  rsvp: '',
  location: '',
  locationLink: '',
  type: 0,
};

const HIRING_DESCRIPTION = "Be part of PERMIKA's 2025/2026 family 🇮🇩 !";
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

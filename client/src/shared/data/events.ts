import { UpcomingEvent } from "../types/types";
const { DateTime } = require('luxon');
const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: "HALU 2024",
    date: DateTime.fromFormat('2024-09-21 13:00', 'yyyy-MM-dd HH:mm', { zone: 'America/Los_Angeles' }).toString(),
    rsvp: "https://forms.gle/q5CoXxqfHgh5iDog9",
    location: "KJRI Vancouver (1630 Alberni Street)",
    locationLink: "https://maps.app.goo.gl/3DMajRakk1v4nwbG8",
    type: 0,
  },
];

const UPCOMING_EVENTS_DEFAULT: UpcomingEvent = {
  name: "No Upcoming Events",
  date: "0000-00-00 00:00",
  rsvp: "",
  location: "",
  locationLink: "",
  type: 0,
};

// const EVENT_DESCRIPTION = "Save yourself a seat for the event below!";
const EVENT_DESCRIPTION = "Connect with the Indonesian community!";
const EVENT_BUTTON = "JOIN";

const HIRING_DESCRIPTION = "Be part of PERMIKA's family 2024/2025";
const HIRING_BUTTON = "Join PERMIKA";

export {
  DATE_FORMAT,
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
  EVENT_DESCRIPTION,
  EVENT_BUTTON,
  HIRING_DESCRIPTION,
  HIRING_BUTTON,
};

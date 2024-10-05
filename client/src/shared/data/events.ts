import { UpcomingEvent } from "../types/types";
const { DateTime } = require('luxon');
const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: "Waroeng 2024: Ayam Geprek",
    date: DateTime.fromFormat('2024-10-05 19:00', 'yyyy-MM-dd HH:mm', { zone: 'America/Los_Angeles' }).toString(),
    rsvp: "https://forms.gle/dZKHC8H3ByHjnyMH6",
    location: "UBC, Marine Drive, Metrotown, Lougheed",
    locationLink: "",
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
const EVENT_DESCRIPTION = "Order Here!";
const EVENT_BUTTON = "ORDER";

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


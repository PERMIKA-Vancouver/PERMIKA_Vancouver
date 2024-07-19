import { UpcomingEvent } from "../types/types";
const { DateTime } = require('luxon');
const DATE_FORMAT = 'YYYY-MM-DD HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    name: "Pre-Departure Orientation",
    date: DateTime.fromFormat('2024-07-19 22:00', 'yyyy-MM-dd HH:mm', { zone: 'America/Los_Angeles' }).toString(),
    rsvp: "https://ubc.zoom.us/j/67177885132?pwd=M72TbZWb1CjfghUemmpfc3qrA77wXG.1",
    location: "",
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

const EVENT_DESCRIPTION = "Join the Pre-Departure Orientation below!";
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

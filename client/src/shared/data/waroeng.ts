import { UpcomingWaroeng } from "../types/types";
const { DateTime } = require("luxon");

const DATE_FORMAT = "yyyy-MM-dd HH:mm";

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_WAROENG: UpcomingWaroeng[] = [
  {
    date: DateTime.fromFormat("2025-01-25 23:59", DATE_FORMAT, {
      zone: "America/Los_Angeles",
    }),
    pickup: DateTime.fromFormat("2025-01-30 17:00", DATE_FORMAT, {
      zone: "America/Los_Angeles",
    }),
    link: "https://forms.gle/dZKHC8H3ByHjnyMH6",
  },
];

export { DATE_FORMAT, UPCOMING_WAROENG };

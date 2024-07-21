import { UpcomingWaroeng } from '../types/types';
const { DateTime } = require('luxon');

const DATE_FORMAT = 'yyyy-MM-dd HH:mm';

// Date format 'YYYY-MM-DD HH:mm'
const UPCOMING_WAROENG: UpcomingWaroeng[] = [
  {
    date: DateTime.fromFormat('2024-07-26 23:00', DATE_FORMAT, { zone: 'America/Los_Angeles' }),
    pickup: DateTime.fromFormat('2024-07-28 16:00', DATE_FORMAT, { zone: 'America/Los_Angeles' }),
    link: 'https://forms.gle/yYS7zPBCVmEPcAqR6',
  },
];

export { DATE_FORMAT, UPCOMING_WAROENG };

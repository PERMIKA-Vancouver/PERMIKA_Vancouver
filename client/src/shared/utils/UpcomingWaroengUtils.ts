import dayjs from 'dayjs';
import { DATE_FORMAT, UPCOMING_WAROENG } from '../data/waroeng';

const getNextWaroeng = (): number => {
  let nextWaroeng: number = -1;
  for (let i = 0; i < UPCOMING_WAROENG.length; i++) {
    if (!checkDatePassed(UPCOMING_WAROENG[i].date)) nextWaroeng = i;
  }

  return nextWaroeng;
};

const isNextWaroeng = (index: number): boolean => {
  return index !== -1;
};

const getNextWaroengLink = (index: number): string => {
  return UPCOMING_WAROENG[index].link;
};

export { getNextWaroeng, isNextWaroeng, getNextWaroengLink };

// PRIVATE HELPER METHODS
const checkDatePassed = (date: string): boolean => {
  return dayjs(date, DATE_FORMAT).isBefore(dayjs());
};

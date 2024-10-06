import { UPCOMING_WAROENG } from '../data/waroeng';
const { DateTime } = require('luxon');

const getNextWaroeng = (): number => {
  let nextWaroeng: number = -1;
  for (let i = 0; i < UPCOMING_WAROENG.length; i++) {
    if (!checkDatePassed(UPCOMING_WAROENG[i].pickup)) nextWaroeng = i;
  }

  return nextWaroeng;
};

const isNextWaroeng = (index: number): boolean => {
  return index !== -1;
};

const getNextWaroengLink = (index: number): string => {
  return UPCOMING_WAROENG[index].link;
};

const isWaroengPreOrderPassed = (index: number): boolean => {
  return checkDatePassed(UPCOMING_WAROENG[index].date);
};

export {
  getNextWaroeng,
  isNextWaroeng,
  getNextWaroengLink,
  isWaroengPreOrderPassed,
};

// PRIVATE HELPER METHODS
const checkDatePassed = (date: string): boolean => {
  return date < DateTime.now().setZone('America/Los_Angeles');
};

import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';
import { getRemainingTimeUntilTimestamp } from '../../utils/CountdownTimerUtils';

const defaultRemainingTime = {
  minutes: '00',
  hours: '00',
  days: '00',
  months: '00',
};

export const CountdownTimer = ({
  countdownTimestamp,
}: {
  countdownTimestamp: Dayjs;
}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestamp);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestamp]);

  function updateRemainingTime(countdown: Dayjs) {
    setRemainingTime(getRemainingTimeUntilTimestamp(countdown));
  }

  return (
    <div className="text-white flex justify-between">
      <span>{remainingTime.months}</span>
      <span>months</span>
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span>{remainingTime.hours}</span>
      <span>hours</span>
      <span>{remainingTime.minutes}</span>
      <span>minutes</span>
    </div>
  );
};

import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';
import { getRemainingTimeUntilTimestamp } from '../../utils/CountdownTimerUtils';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
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
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span>{remainingTime.hours}</span>
      <span>hours</span>
      <span>{remainingTime.minutes}</span>
      <span>minutes</span>
      <span>{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

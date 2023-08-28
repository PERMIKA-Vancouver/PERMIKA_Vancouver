import { useState, useEffect } from 'react';
import { Dayjs } from 'dayjs';
import { getRemainingTimeUntilTimestamp } from '../../utils/CountdownTimerUtils';

const defaultRemainingTime = {
  minutes: '00',
  hours: '00',
  days: '00',
  months: '00',
};

const dateStyle =
  'font-AveRom text-2xl leading-[normal] font-medium -tracking-[0.03rem]';

const dateNumberStyle =
  'font-RegoBook text-[9rem] font-medium leading-[normal] -tracking-[0.03rem]';

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
    <div className="grid grid-cols-[minmax(0,_1fr)_7.5%_minmax(0,_1fr)_7.5%_minmax(0,_1fr)_7.5%_minmax(0,_1fr)] text-[#E3EEDD]">
      <>
        <span className={`${dateStyle}`}>Months</span>
        <div></div>
        <span className={`${dateStyle}`}>Days</span>
        <div></div>
        <span className={`${dateStyle}`}>Hours</span>
        <div></div>
        <span className={`${dateStyle}`}>Minutes</span>
      </>
      <>
        <span className={`${dateNumberStyle}`}>{remainingTime.months}</span>
        <span className={`${dateNumberStyle}`}>:</span>
        <span className={`${dateNumberStyle}`}>{remainingTime.days}</span>
        <span className={`${dateNumberStyle}`}>:</span>
        <span className={`${dateNumberStyle}`}>{remainingTime.hours}</span>
        <span className={`${dateNumberStyle}`}>:</span>
        <span className={`${dateNumberStyle}`}>{remainingTime.minutes}</span>
      </>
    </div>
  );
};

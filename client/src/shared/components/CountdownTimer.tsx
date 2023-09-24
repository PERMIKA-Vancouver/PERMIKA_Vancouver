import { useState, useEffect } from 'react';
import { getRemainingTimeUntilTimestamp } from '../utils/CountdownTimerUtils';

const defaultRemainingTime = {
  minutes: '00',
  hours: '00',
  days: '00',
  months: '00',
};

const dateStyle =
  'font-AveRom text-2xl leading-[normal] font-medium -tracking-[0.03rem] text-center';

const mobileDateStyle =
  'font-AveRom text-base font-medium leading-[normal] -tracking-[0.02rem] text-center';

const dateNumberStyle =
  'font-RegoBook text-[9rem] font-medium leading-[normal] -tracking-[0.03rem] text-center';

const mobileDateNumberStyle =
  'font-RegoReg text-[2.9375rem] font-normal leading-[normal] text-center';

export const CountdownTimer = ({
  countdownTimestamp,
  isMobileView,
}: {
  countdownTimestamp: string;
  isMobileView: boolean;
}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestamp);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestamp]);

  function updateRemainingTime(countdown: string) {
    setRemainingTime(getRemainingTimeUntilTimestamp(countdown));
  }

  return (
    <div className="grid grid-cols-[minmax(0,_1fr)_8.5%_minmax(0,_1fr)_8.5%_minmax(0,_1fr)_8.5%_minmax(0,_1fr)] text-[#E3EEDD]">
      <>
        <span className={`${isMobileView ? mobileDateStyle : dateStyle}`}>
          Months
        </span>
        <div></div>
        <span className={`${isMobileView ? mobileDateStyle : dateStyle}`}>
          Days
        </span>
        <div></div>
        <span className={`${isMobileView ? mobileDateStyle : dateStyle}`}>
          Hours
        </span>
        <div></div>
        <span className={`${isMobileView ? mobileDateStyle : dateStyle}`}>
          Minutes
        </span>
      </>
      <>
        <span
          className={`${
            isMobileView ? mobileDateNumberStyle : dateNumberStyle
          }`}
        >
          {remainingTime.months}
        </span>
        <span
          className={`${
            isMobileView ? mobileDateNumberStyle : dateNumberStyle
          }`}
        >
          :
        </span>
        <span
          className={`${
            isMobileView ? mobileDateNumberStyle : dateNumberStyle
          }`}
        >
          {remainingTime.days}
        </span>
        <span
          className={`${
            isMobileView ? mobileDateNumberStyle : dateNumberStyle
          }`}
        >
          :
        </span>
        <span
          className={`${
            isMobileView ? mobileDateNumberStyle : dateNumberStyle
          }`}
        >
          {remainingTime.hours}
        </span>
        <span
          className={`${
            isMobileView ? mobileDateNumberStyle : dateNumberStyle
          }`}
        >
          :
        </span>
        <span
          className={`${
            isMobileView ? mobileDateNumberStyle : dateNumberStyle
          }`}
        >
          {remainingTime.minutes}
        </span>
      </>
    </div>
  );
};

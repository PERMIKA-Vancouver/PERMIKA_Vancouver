import { useState, useEffect } from 'react';
import { getRemainingTimeUntilTimestamp } from '../utils/CountdownTimerUtils';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const dateStyle =
  'font-AveRom text-2xl leading-[normal] font-medium -tracking-[0.03rem] text-center';

const mobileDateStyle =
  'font-AveRom text-base font-medium leading-[normal] -tracking-[0.02rem] text-center';

const dateNumberStyle =
  'font-RegoBook text-[9rem] font-medium leading-[normal] -tracking-[0.03rem] text-center';

const tabletDateNumberStyle =
  'font-RegoBook text-[4.625rem] font-normal leading-[normal] -tracking-[0.03rem] text-center';

const mobileDateNumberStyle =
  'font-RegoReg text-[2.9375rem] font-normal leading-[normal] text-center';

export const CountdownTimer = ({
  countdownTimestamp,
  isMobileView,
  isTabletPotraitView,
}: {
  countdownTimestamp: string;
  isMobileView: boolean;
  isTabletPotraitView: boolean;
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
        <div></div>
        <span className={`${isMobileView ? mobileDateStyle : dateStyle}`}>
          Seconds
        </span>
      </>
      <>
        <span
          className={`${
            isMobileView
              ? mobileDateNumberStyle
              : isTabletPotraitView
              ? tabletDateNumberStyle
              : dateNumberStyle
          }`}
        >
          {remainingTime.days}
        </span>
        <span
          className={`${
            isMobileView
              ? mobileDateNumberStyle
              : isTabletPotraitView
              ? tabletDateNumberStyle
              : dateNumberStyle
          }`}
        >
          :
        </span>
        <span
          className={`${
            isMobileView
              ? mobileDateNumberStyle
              : isTabletPotraitView
              ? tabletDateNumberStyle
              : dateNumberStyle
          }`}
        >
          {remainingTime.hours}
        </span>
        <span
          className={`${
            isMobileView
              ? mobileDateNumberStyle
              : isTabletPotraitView
              ? tabletDateNumberStyle
              : dateNumberStyle
          }`}
        >
          :
        </span>
        <span
          className={`${
            isMobileView
              ? mobileDateNumberStyle
              : isTabletPotraitView
              ? tabletDateNumberStyle
              : dateNumberStyle
          }`}
        >
          {remainingTime.minutes}
        </span>
        <span
          className={`${
            isMobileView
              ? mobileDateNumberStyle
              : isTabletPotraitView
              ? tabletDateNumberStyle
              : dateNumberStyle
          }`}
        >
          :
        </span>
        <span
          className={`${
            isMobileView
              ? mobileDateNumberStyle
              : isTabletPotraitView
              ? tabletDateNumberStyle
              : dateNumberStyle
          }`}
        >
          {remainingTime.seconds}
        </span>
      </>
    </div>
  );
};

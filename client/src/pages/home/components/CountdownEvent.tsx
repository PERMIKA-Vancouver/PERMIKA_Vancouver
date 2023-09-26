import dayjs from 'dayjs';

import { CountdownTimer } from '../../../shared/components/CountdownTimer';
import { CustomButton } from '../../../shared/components/CustomButton';
import {
  UPCOMING_EVENTS,
  UPCOMING_EVENTS_DEFAULT,
  DATE_FORMAT,
} from '../../../shared/data/events';

function checkDatePassed(date: string): boolean {
  return dayjs(date, DATE_FORMAT).isBefore(dayjs());
}

function toStringMonthDate(date: string): string {
  const month = parseInt(date.substring(5, 7));
  const day = parseInt(date.substring(8, 10));

  const newDate = new Date();
  newDate.setMonth(month - 1);

  return newDate.toLocaleString('en-US', { month: 'long' }) + ' ' + day;
}

export const CountdownEvent = ({
  isMobileView,
  isTabletPotraitView,
}: {
  isMobileView: boolean;
  isTabletPotraitView: boolean;
}) => {
  let nextEvent = UPCOMING_EVENTS_DEFAULT;

  for (let i = 0; i < UPCOMING_EVENTS.length; i++) {
    if (!checkDatePassed(UPCOMING_EVENTS[i].date)) {
      nextEvent = UPCOMING_EVENTS[i];
      break;
    }
  }

  const textDate =
    nextEvent === UPCOMING_EVENTS_DEFAULT
      ? ''
      : toStringMonthDate(nextEvent.date);

  return (
    <div
      className={`${
        isMobileView
          ? 'pt-[4.31rem] pb-16'
          : isTabletPotraitView
          ? 'py-[6.5rem]'
          : 'pt-[7%] pb-[18%]'
      } bg-forest-green`}
    >
      <div className={`${isMobileView ? 'w-[80%]' : 'w-[63.2%]'} ml-all`}>
        <>
          <h2 className="text-white">Coming Up</h2>
        </>
        <div
          className={`${
            isMobileView ? 'mt-4' : 'flex mt-[2%]'
          } justify-between`}
        >
          <div className="flex items-center">
            {!isMobileView && (
              <div
                className={`mr-4 bg-light-green w-[1.4375rem] h-[0.4375rem] rounded-[0.0625rem]`}
              ></div>
            )}
            <>
              <h3 className={`${isMobileView ? 'mt-4' : 'sub'} text-[#8CA080]`}>
                {nextEvent.name}
              </h3>
            </>
          </div>
          <>
            <p
              className={`${
                isMobileView
                  ? 'mt-2'
                  : 'font-AveRom text-[1.3125rem] italic font-normal leading-[124.6%] tracking-[-0.02625rem]'
              } text-[#8CA080]`}
            >
              {textDate}
            </p>
          </>
        </div>
        <div
          className={`${
            isMobileView
              ? 'mt-[4.3rem] mb-[5.25rem]'
              : isTabletPotraitView
              ? 'my-[5.75rem]'
              : 'mt-[9%] mb-[7%]'
          }`}
        >
          <CountdownTimer
            countdownTimestamp={nextEvent.date}
            isMobileView={isMobileView}
            isTabletPotraitView={isTabletPotraitView}
          />
        </div>
        {nextEvent !== UPCOMING_EVENTS_DEFAULT && (
          <div className="text-center">
            <div className="mb-4">
              <span className={`font-AveRom text-[#E3E3E3] text-[1rem]`}>
                Save yourself a seat for the event below!
              </span>
            </div>
            <>
              <CustomButton
                text="RSVP"
                className="m-auto"
                link={nextEvent.rsvp}
              />
            </>
          </div>
        )}
      </div>
    </div>
  );
};

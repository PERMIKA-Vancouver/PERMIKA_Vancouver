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

// function toStringMonthDate(date: string): string {
//   return '';
// }

export const CountdownEvent = () => {
  let nextEvent = UPCOMING_EVENTS_DEFAULT;

  for (let i = 0; UPCOMING_EVENTS.length; i++) {
    if (!checkDatePassed(UPCOMING_EVENTS[i].date)) {
      nextEvent = UPCOMING_EVENTS[i];
      break;
    }
  }

  return (
    <div className="bg-forest-green h-screen pt-[7%]">
      <div className="w-[63.2%] mx-auto">
        <>
          <h2 className="text-white">Coming Up</h2>
        </>
        <div className="flex justify-between mt-[1.5%]">
          <div className="flex items-center">
            <div
              className={`mr-4 bg-light-green w-[1.4375rem] h-[0.4375rem] rounded-[0.0625rem]`}
            ></div>
            <>
              <span className="sub text-[#8CA080]">{nextEvent.name}</span>
            </>
          </div>
          <>
            <span
              className={`font-AveRom text-[#8CA080] text-[1.3125rem] italic font-normal leading-[124.6%] tracking-[-0.02625rem]`}
            >
              August 21
            </span>
          </>
        </div>
        <div className="mt-[9%] mb-[7%]">
          <CountdownTimer countdownTimestamp={nextEvent.date} />
        </div>
        <div className="text-center">
          <div className="mb-4">
            <span className={`font-AveRom text-[#E3E3E3] text-[1rem]`}>
              Save yourself a seat for the event below!
            </span>
          </div>
          <>
            <CustomButton text="RSVP" className="m-auto" />
          </>
        </div>
      </div>
    </div>
  );
};

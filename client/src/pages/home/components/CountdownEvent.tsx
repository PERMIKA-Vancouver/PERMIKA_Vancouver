import { CountdownTimer } from '../../../shared/components/CountdownTimer';
import { CustomButton } from '../../../shared/components/CustomButton';
import {
  EVENT_BUTTON_TEXT,
  EVENT_DESCRIPTION,
} from '../../../shared/data/events';
import { ScreenSizeProps, UpcomingEvent } from '../../../shared/types/types';
import {
  getEventMonthDate,
  getEventName,
  getEventRsvp,
  getEventTimestamp,
  getNextEvent,
  isNextEvent,
} from '../../../shared/utils/UpcomingEventUtils';

export const CountdownEvent = ({
  isMobileView,
  isTabletPotraitView,
}: ScreenSizeProps) => {
  const event: UpcomingEvent = getNextEvent();

  return (
    <div
      className={`${
        isMobileView
          ? 'pt-[4.31rem]'
          : isTabletPotraitView
          ? 'pt-[6.5rem]'
          : 'pt-[7%]'
      } bg-forest-green`}
    >
      <div className={`${isMobileView ? 'w-[80%]' : 'w-[63.2%]'} ml-all`}>
        <>
          <h2 className="text-white">Coming Up</h2>
        </>
        <div>
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
                <h3
                  className={`${isMobileView ? 'mt-4' : 'sub'} text-[#8CA080]`}
                >
                  {getEventName(event)}
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
                {getEventMonthDate(event)}
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
              countdownTimestamp={getEventTimestamp(event)}
              isMobileView={isMobileView}
              isTabletPotraitView={isTabletPotraitView}
            />
          </div>
          {isNextEvent(event) && (
            <div className="text-center">
              <div className="mb-4">
                <span className={`font-AveRom text-[#E3E3E3] text-[1rem]`}>
                  {EVENT_DESCRIPTION}
                </span>
              </div>
              <>
                <CustomButton
                  text={EVENT_BUTTON_TEXT}
                  className="m-auto"
                  link={getEventRsvp(event)}
                />
              </>
            </div>
          )}
          <div
            className={
              isMobileView
                ? 'pb-16'
                : isTabletPotraitView
                ? 'pb-[6.5rem]'
                : 'pb-[18%]'
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

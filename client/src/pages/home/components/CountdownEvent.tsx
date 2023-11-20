import { CountdownTimer } from '../../../shared/components/CountdownTimer';
import { CustomButton } from '../../../shared/components/CustomButton';
import { ScreenSizeProps } from '../../../shared/types/types';
import { getNextEvent } from '../../../shared/utils/UpcomingEventUtils';

export const CountdownEvent = ({
  isMobileView,
  isTabletPotraitView,
}: ScreenSizeProps) => {
  const [
    isNextEvent,
    nextEventName,
    nextEventTimestamp,
    nextEventDate,
    nextEventDescription,
    nextEventButtonText,
    nextEventLink,
  ] = getNextEvent();

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
                {nextEventName}
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
              {nextEventDate}
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
            countdownTimestamp={nextEventTimestamp}
            isMobileView={isMobileView}
            isTabletPotraitView={isTabletPotraitView}
          />
        </div>
        {isNextEvent === 'true' && (
          <div className="text-center">
            <div className="mb-4">
              <span className={`font-AveRom text-[#E3E3E3] text-[1rem]`}>
                {nextEventDescription}
              </span>
            </div>
            <>
              <CustomButton
                text={nextEventButtonText}
                className="m-auto"
                link={nextEventLink}
              />
            </>
          </div>
        )}
      </div>
    </div>
  );
};

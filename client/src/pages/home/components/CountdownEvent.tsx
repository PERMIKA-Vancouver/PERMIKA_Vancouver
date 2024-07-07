import { CountdownTimer } from "../../../shared/components/CountdownTimer";
import { CustomButton } from "../../../shared/components/CustomButton";
import { ScreenSizeProps } from "../../../shared/types/types";
import {
  getNextEvents,
  getNextEventName,
  getNextEventDate,
  getNextEventTimestamp,
  getNextEventDescription,
  getNextEventButtonText,
  getNextEventLink,
  isNextEvents,
  getEventType,
} from "../../../shared/utils/UpcomingEventUtils";

export const CountdownEvent = ({
  isMobileView,
  isTabletPotraitView,
}: ScreenSizeProps) => {
  return (
    <div
      id="upcoming_event"
      className={`${
        isMobileView
          ? "pt-[4.31rem]"
          : isTabletPotraitView
          ? "pt-[6.5rem]"
          : "pt-[7%]"
      } bg-forest-green`}
    >
      <div className={`${isMobileView ? "w-[80%]" : "w-[63.2%]"} ml-all`}>
        <>
          <h2 className="text-white">Coming Up</h2>
        </>
        {getNextEvents().map((index: number) => (
          <div>
            <div
              className={`${
                isMobileView ? "mt-4" : "flex mt-[2%]"
              } justify-between`}
            >
              <div className="flex items-center">
                {!isMobileView && (
                  <div
                    className={`mr-4 bg-light-green w-[1.4375rem] h-[0.4375rem] rounded-[0.0625rem]`}
                  ></div>
                )}
                <div>
                  <h3
                    className={`${
                      isMobileView ? "mt-4" : "sub"
                    } text-[#8CA080]`}
                  >
                    {getNextEventName(index)}
                  </h3>
                  <a className="underline text-base mt-1 text-[#68785d]"
                    href="https://forms.gle/VopZFSiGvv5go9Vc7">RSVP for the Event Here!
                  </a>
                </div>
              </div>
              <>
                <p
                  className={`${
                    isMobileView
                      ? "mt-2"
                      : "font-AveRom text-[1.3125rem] italic font-normal leading-[124.6%] tracking-[-0.02625rem]"
                  } text-[#8CA080]`}
                >
                  {getNextEventDate(index)}
                </p>
              </>
            </div>
            <div
              className={`${
                isMobileView
                  ? "mt-[4.3rem] mb-[5.25rem]"
                  : isTabletPotraitView
                  ? "my-[5.75rem]"
                  : "mt-[9%] mb-[7%]"
              }`}
            >
              <CountdownTimer
                countdownTimestamp={getNextEventTimestamp(index)}
                isMobileView={isMobileView}
                isTabletPotraitView={isTabletPotraitView}
              />
            </div>
            {isNextEvents(index) && (
              <div className="text-center">
                <div className="mb-4">
                  <span className={`font-AveRom text-[#E3E3E3] text-[1rem]`}>
                    {getNextEventDescription(index)}
                  </span>
                </div>
                {getEventType(index) ? (
                  <div className="flex justify-center gap-4">
                    <CustomButton
                      text={getNextEventButtonText(index)}
                      className=""
                      link={getNextEventLink(index)}
                    />
                    {/* <CustomButton
                      text={'Hiring Package'}
                      className=""
                      link={
                        'https://drive.google.com/file/d/1O5g84ux-lan3ImQfBl3G3xmwI1Ix3AS8/view'
                      }
                    /> */}
                  </div>
                ) : (
                  <>
                    <CustomButton
                      text={getNextEventButtonText(index)}
                      className="m-auto"
                      link={getNextEventLink(index)}
                    />
                  </>
                )}
              </div>
            )}
            <div
              className={
                isMobileView
                  ? "pb-16"
                  : isTabletPotraitView
                  ? "pb-[6.5rem]"
                  : "pb-[18%]"
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

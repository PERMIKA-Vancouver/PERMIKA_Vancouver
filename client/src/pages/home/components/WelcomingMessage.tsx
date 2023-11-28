import Core from '../../../assets/core.png';
import CoreSquare from '../../../assets/core_square.png';
import { CustomButton } from '../../../shared/components/CustomButton';
import { ScreenSizeProps } from '../../../shared/types/types';

const WelcomingMsg =
  "Hello there! Welcome to PERMIKA Vancouver's new chapter. We're so excited for you to experience both our signature and new events in this coming year. We also hope to create a community that you can call home while living in Vancouver. We're so glad you're here!";

export const WelcomingMessage = ({
  isMobileView,
  isTabletPotraitView,
}: ScreenSizeProps) => {
  return (
    <div
      className={`${
        isMobileView
          ? 'pt-20 pb-[5.5rem]'
          : isTabletPotraitView
          ? 'pt-20 pb-28'
          : 'h-screen min-h-[700px] max-h-[900px] pt-[15vh] pb-[25vh]'
      } w-full bg-white`}
    >
      <div
        className={`${
          isTabletPotraitView ? 'ml-all' : 'flex flex-row-reverse'
        } justify-between w-full h-full`}
      >
        <div className="flex justify-end">
          <img
            src={isTabletPotraitView ? Core : CoreSquare}
            alt="Core Team"
            className={`${
              isTabletPotraitView
                ? 'w-full aspect-[2/1] object-cover'
                : 'max-h-full w-auto'
            }`}
          />
        </div>
        <div
          className={`${
            isMobileView
              ? 'mt-5'
              : isTabletPotraitView
              ? 'w-1/2 mt-10'
              : 'w-[32%] relative ml-all'
          }`}
        >
          <h3
            className={` ${
              isMobileView
                ? 'w-[70%] mb-5'
                : isTabletPotraitView
                ? 'mb-11'
                : 'mb-11'
            }  text-black-text`}
          >
            Welcoming message from PERMIKA 2023/24 Core team
          </h3>
          <p
            className={`${
              isMobileView
                ? 'mb-12 w-[75%]'
                : isTabletPotraitView
                ? 'mb-16'
                : 'w-[84%]'
            } text-grey-body `}
          >
            {WelcomingMsg}
            <br />
            <br />
            Tell us a bit about yourself and become a part of PERMIKA Vancouver!
          </p>
          <CustomButton
            text="Join PERMIKA"
            className={`${!isTabletPotraitView && 'absolute bottom-0'}`}
            link="https://forms.gle/z8AFC5m5PiJzKBEf7"
          />
        </div>
      </div>
    </div>
  );
};

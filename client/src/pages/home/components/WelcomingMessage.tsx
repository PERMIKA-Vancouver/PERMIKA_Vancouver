import { ScreenSizeProps } from '../../../shared/types/types';

const WelcomingMsg =
  "Hello and welcome! We're thrilled to kick off a new chapter with PERMIKA Vancouver and excited for you to join us. This year, get ready to experience a mix of our classic events and exciting new ones designed to bring us closer as a community. We're here to create a welcoming space that feels like home while you're in Vancouver. We're so glad to have you with us!";

// Member sign up link
// const LINK = 'https://forms.gle/z8AFC5m5PiJzKBEf7';

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
            src={
              isTabletPotraitView
                ? 'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/welcome/core.jpg'
                : 'https://permikawebsite.s3.us-west-2.amazonaws.com/assets/welcome/core_square.JPG'
            }
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
            Welcoming message from PERMIKA 2024/25 Core team
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
            {/* Tell us a bit about yourself and become a part of PERMIKA Vancouver! */}
          </p>
          {/* <CustomButton
            text="Join PERMIKA"
            className={`${!isTabletPotraitView && 'absolute bottom-0'}`}
            link={LINK}
          /> */}
        </div>
      </div>
    </div>
  );
};

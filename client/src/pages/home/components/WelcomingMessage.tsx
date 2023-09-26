import Core from '../../../assets/core.png';
import CoreSquare from '../../../assets/core_square.png';
import { CustomButton } from '../../../shared/components/CustomButton';

const WelcomingMsg =
  "Hello there! Welcome to PERMIKA Vancouver's new chapter. We're so excited for you to experience both our signature and new events in this coming year. We also hope to create a community that you can call home while living in Vancouver. We're so glad you're here!";

export const WelcomingMessage = ({
  isMobileView,
}: {
  isMobileView: boolean;
}) => {
  return (
    <div
      className={`${
        isMobileView ? 'pt-20 pb-[5.5rem]' : 'h-screen pt-[15vh] pb-[25vh]'
      } w-full bg-white`}
    >
      <div
        className={`${
          isMobileView ? 'ml-all' : 'flex flex-row-reverse'
        } justify-between w-full h-full`}
      >
        <div>
          <img
            src={isMobileView ? Core : CoreSquare}
            alt="Core Team"
            className={`${
              isMobileView
                ? 'w-full aspect-[2/1] object-cover'
                : 'max-h-[60vh] w-auto'
            }`}
          />
        </div>
        <div className={`${isMobileView ? 'mt-5' : 'w-[32%] relative ml-all'}`}>
          <h3
            className={` ${
              isMobileView ? 'w-[70%] mb-5' : 'mb-11'
            }  text-black-permika`}
          >
            Welcoming message from PERMIKA 2023/24 Core team
          </h3>
          <p
            className={`${
              isMobileView ? 'mb-12' : 'mb-28'
            } text-[#9A9A9A]  w-[84%]`}
          >
            {WelcomingMsg}
            <br />
            <br />
            Tell us a bit about yourself and become a part of PERMIKA Vancouver!
          </p>
          <CustomButton
            text="Join PERMIKA"
            className={`${!isMobileView && 'absolute bottom-0'}`}
            link="https://www.linkedin.com/in/julian-widjaja/"
          />
        </div>
      </div>
    </div>
  );
};

import Core from '../../../assets/core.png';
import { CustomButton } from '../../../shared/components/CustomButton';

const WelcomingMsg =
  "Hello there! Welcome to PERMIKA Vancouver's new chapter. We're so excited for you to experience both our signature and new events in this coming year. We also hope to create a community that you can call home while living in Vancouver. We're so glad you're here!";

export const WelcomingMessage = () => {
  return (
    <div className="pt-[15vh] pb-[25vh] h-screen w-full">
      <div className="flex justify-between w-full h-full">
        <div className="w-[32%] ml-[20%] relative">
          <h3 className="mb-11 text-black-permika">
            Welcoming message from PERMIKA 2023/24 Core team
          </h3>
          <p className="text-[#9A9A9A] mb-28 w-[84%]">
            {WelcomingMsg}
            <br />
            <br />
            Tell us a bit about yourself and become a part of PERMIKA Vancouver!
          </p>
          <CustomButton
            text="Join PERMIKA"
            className="absolute bottom-0"
            link="https://www.linkedin.com/in/julian-widjaja/"
          />
        </div>
        <div>
          <img src={Core} alt="Core Team" className="max-h-[60vh] w-auto" />
        </div>
      </div>
    </div>
  );
};

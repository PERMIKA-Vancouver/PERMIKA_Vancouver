import { CountdownTimer } from '../../../shared/components/CountdownTimer';
import { CustomButton } from '../../../shared/components/CustomButton';

export const CountdownEvent = () => {
  return (
    <div className="bg-forest-green h-screen pt-[11.66%]">
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
              <span className="sub text-[#8CA080]">
                Pre-depature Orientation
              </span>
            </>
          </div>
          <>
            <span
              className={`text-[#8CA080] text-[1.3125rem] italic font-normal leading-[124.6%] tracking-[-0.02625rem]`}
            >
              August 21
            </span>
          </>
        </div>
        <div className="mt-[9%]">
          <CountdownTimer />
        </div>
        <div className="text-center">
          <div className="mb-4">
            <span className={`text-[#E3E3E3] text-[1rem]`}>
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

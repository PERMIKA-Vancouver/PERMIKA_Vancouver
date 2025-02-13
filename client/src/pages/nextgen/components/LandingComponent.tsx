// import { CustomButton } from "../../../shared/components/CustomButton";
import Brochure from '../../../assets/Brochure.png';
import BrochureSq from '../../../assets/Brochure-square.png';

export const LandingComponent = () => {
  return (
    // ***** OLD REGISTRATION PAGE ***** //
    // <div className="pt-navbar bg-forest-green h-screen flex items-center">
    //   <div className="pl-all pr-[17.5%] sm:pr-[20%] lg:pr-[35%] grid gap-[1.375rem]">
    //     <h1 className="text-white">
    //       PERMIKA Next<span className="text-sunset-orange">Gen</span>
    //     </h1>
    //     <h4 className="text-white text-[1.125rem] sm:text-[21px]">
    //       Connect with industry leaders at our upcoming panel and networking
    //       event! Gain insights from expert speakers, explore emerging trends,
    //       and expand your professional network. Don't miss this opportunity to
    //       learn and make valuable connections!
    //     </h4>
    //     <CustomButton
    //       text={"Get tickets now!"}
    //       className={""}
    //       link={"https://forms.gle/jdeurQxe5ZyFGkh18"}
    //     />
    //   </div>
    // </div>

    <div className="pt-navbar">
      <img src={Brochure} alt="brochure" className="hidden sm:block" />
      <img src={BrochureSq} alt="brochure" className="sm:hidden" />
      <div className="pl-all pr-[17.5%] sm:pr-[20%] lg:pr-[35%] grid gap-[1.375rem]"></div>
    </div>
  );
};

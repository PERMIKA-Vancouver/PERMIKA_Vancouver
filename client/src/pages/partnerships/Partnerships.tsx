import { useState } from "react";
import { LandingPage } from './components/LandingPage';
import { Sponsors } from './components/Sponsors';
import { Opportunities } from './components/Opportunities';
import { Footer } from '../../shared/components/Footer';
import { MOBILE_WIDTH, TABLET_POTRAIT_WIDTH } from "../../shared/data/common";

export const Partnerships = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return (
    <div>
        <LandingPage />
        <div className="relative w-full ">
          <div className='relative pt-[100vh] w-full'>
            <Sponsors />
            <Opportunities />
          </div>
        </div>
    </div>
  );
};

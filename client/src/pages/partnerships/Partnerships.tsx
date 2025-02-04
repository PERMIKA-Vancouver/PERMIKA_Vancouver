import { LandingPage } from './components/LandingPage';
import { Sponsors } from './components/Sponsors';
import { Opportunities } from './components/Opportunities';

export const Partnerships = () => {
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

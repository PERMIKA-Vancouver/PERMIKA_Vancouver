import { UpcomingPage } from '../../shared/layouts/UpcomingPage';
import { LandingPage } from './components/LandingPage';
import { Preview } from './components/Preview';
import { Teams } from './components/Teams';

export const About = () => {
  return (
    <div>
        <LandingPage />
        <div className="relative w-full ">
          <div className='relative pt-[100vh] w-full'>
            <Preview />
            <Teams />
          </div>
        </div>
    </div>
  );
};

// export const About = () => {
//   return (
//     <>
//       <UpcomingPage />
//     </>
//   );
// };

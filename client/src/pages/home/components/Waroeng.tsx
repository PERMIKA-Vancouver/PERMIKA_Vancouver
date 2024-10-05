import { CustomButton } from '../../../shared/components/CustomButton';
import {
  getNextWaroeng,
  getNextWaroengLink,
  isNextWaroeng,
  isWaroengPreOrderPassed,
} from '../../../shared/utils/UpcomingWaroengUtils';

import slide1 from './ayam_geprek_images/1.jpg';
import slide2 from './ayam_geprek_images/2.jpg';
import slide3 from './ayam_geprek_images/3.jpg';

export const Waroeng = () => {
  const nextWaroeng = getNextWaroeng();

  if (!isNextWaroeng(nextWaroeng)) {
    return <div></div>;
  }

  return (
    <div className="ml-all mt-24 mr-[10%] sm:mr-28">
      <div className="flex justify-between flex-wrap">
        <h2 className="mb-4">Waroeng '24 Presents</h2>
        {!isWaroengPreOrderPassed(nextWaroeng) && (
          <CustomButton
            text={'Pre-order'}
            className={'self-center'}
            link={getNextWaroengLink(nextWaroeng)}
          />
        )}
      </div>
      <div className="flex mt-8 w-full">
        <img src={slide1} alt="Waroeng" className="w-1/3" />
        <img src={slide2} alt="Waroeng" className="w-1/3" />
        <img src={slide3} alt="Waroeng" className="w-1/3" />
      </div>
    </div>
  );
};

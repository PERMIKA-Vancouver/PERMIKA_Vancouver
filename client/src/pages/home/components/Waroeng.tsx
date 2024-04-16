import LeftImg from '../../../left.png';
import MidImg from '../../../middle.png';
import RightImg from '../../../right.png';
import { CustomButton } from '../../../shared/components/CustomButton';
import {
  getNextWaroeng,
  getNextWaroengLink,
  isNextWaroeng,
  isWaroengPreOrderPassed,
} from '../../../shared/utils/UpcomingWaroengUtils';

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
        <img src={LeftImg} alt="Waroeng" className="w-1/3" />
        <img src={MidImg} alt="Waroeng" className="w-1/3" />
        <img src={RightImg} alt="Waroeng" className="w-1/3" />
      </div>
    </div>
  );
};

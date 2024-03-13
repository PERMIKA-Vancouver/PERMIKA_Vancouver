import LeftImg from '../../../left.png';
import MidImg from '../../../middle.png';
import RightImg from '../../../right.png';
import { CustomButton } from '../../../shared/components/CustomButton';

export const Waroeng = () => {
  return (
    <div className="ml-all mt-24 xs:mr-28 mr-20">
      <div className="flex justify-between">
        <h2>Waroeng '24 Presents</h2>
        <CustomButton
          text={'Pre-order'}
          className={'self-center'}
          link={
            'https://docs.google.com/forms/d/e/1FAIpQLSdM6hEo8mEIgaB_lvBwwqHw3OWddqowRVWUNwkzzDpXq5upJQ/viewform'
          }
        />
      </div>
      <div className="flex mt-8 w-full">
        <img src={LeftImg} alt="" className="w-1/3" />
        <img src={MidImg} alt="" className="w-1/3" />
        <img src={RightImg} alt="" className="w-1/3" />
      </div>
    </div>
  );
};

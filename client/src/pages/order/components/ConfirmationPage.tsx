// ConfirmationPage.tsx
import React from 'react';
import { CustomButton } from '../../../shared/components/CustomButton';

export const ConfirmationPage: React.FC = () => (
  <div>
    <h4 className="text-grey-body xl:max-w-[50%]">
      Your order has been submitted and you will receive a confirmation email
      from us. We appreciate your support and can't wait for you to wear them!
    </h4>
    <CustomButton
      text={'Back to home'}
      className={'mt-[6.88rem]'}
      link={'https://permikavancouver.com'}
    />
  </div>
);

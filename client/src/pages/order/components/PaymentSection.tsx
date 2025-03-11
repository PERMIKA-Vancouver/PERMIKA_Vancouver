// PaymentSection.tsx
import React from 'react';
import { Button, InputBase } from '@mui/material';

interface PaymentSectionProps {
  state: {
    promoCode: string;
    isPromoCodeApplied: boolean;
    isPromoCodeInvalid: boolean;
    finalPrice: number;
    paymentClicked: boolean;
  };
  handleApplyPromoCode: () => void;
  openExternalLink: (url: string) => void;
  handleFieldChange: (field: string, value: string | boolean) => void;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({
  state,
  handleApplyPromoCode,
  openExternalLink,
  handleFieldChange,
}) => {
  const { promoCode, isPromoCodeApplied, isPromoCodeInvalid, finalPrice } =
    state;
  return (
    <div>
      <div className="flex mt-10">
        <InputBase
          className={`border-[1px] border-r-0 ${
            isPromoCodeInvalid
              ? 'border-[#d32f2f]'
              : isPromoCodeApplied
                ? 'border-light-green'
                : 'border-[#bdbdbd]'
          } rounded-l py-1.5 px-3`}
          value={promoCode}
          onChange={(e) => handleFieldChange('promoCode', e.target.value)}
          disabled={isPromoCodeApplied}
          placeholder="Promo code"
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleApplyPromoCode}
          className={`!rounded-l-none !text-white !shadow-none !normal-case ${
            isPromoCodeInvalid
              ? '!bg-[#d32f2f]'
              : isPromoCodeApplied
                ? '!bg-light-green'
                : promoCode
                  ? '!bg-sunset-orange'
                  : '!bg-grey-body'
          }`}
          disabled={!promoCode || isPromoCodeApplied}
        >
          {isPromoCodeApplied ? 'Applied' : 'Apply'}
        </Button>
      </div>
      <div className="mt-4">
        <div className="totals font-light">
          {/* {isPromoCodeApplied && (
            <div className="text-[#9A9A9A] flex justify-between">
              Discount ({`${DISCOUNT * 100}%`})
              <span>${(finalPrice * DISCOUNT).toFixed(2)}</span>
            </div>
          )} */}
          <div className="flex justify-between mt-2.5 text-2xl">
            Total <span>${finalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="payment-form mt-10">
        <div className="upload-picture pt-[5%]">
          <h2 className="payment-label text-[1.875rem] text-[#414141]">
            Payment
          </h2>
          <p className="payment-description pt-[2%] text-grey-body">
            Please access the link below and pay your total amount there.
          </p>
          <p
            onClick={() => {
              handleFieldChange('paymentClicked', true);
              openExternalLink('https://forms.gle/RbuP9j3wqG5ZKAuaA');
            }}
            className="text-blue-600 cursor-pointer text-xl"
          >
            Click here
          </p>
        </div>
      </div>
    </div>
  );
};

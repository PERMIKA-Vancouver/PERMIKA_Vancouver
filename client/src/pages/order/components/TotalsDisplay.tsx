// TotalsDisplay.tsx
import React from 'react';

interface TotalsDisplayProps {
  totalPrice: number;
  discount: number;
  isDiscountActive: boolean;
}

export const TotalsDisplay: React.FC<TotalsDisplayProps> = ({
  totalPrice,
  discount,
  isDiscountActive,
}) => {
  const subtotal = isDiscountActive
    ? totalPrice - totalPrice * discount
    : totalPrice;
  return (
    <div className="totals">
      <div className="text-[#9A9A9A] flex justify-between">
        Merchandise Total <span>${totalPrice.toFixed(2)}</span>
      </div>
      {isDiscountActive && (
        <div className="text-[#9A9A9A] flex justify-between">
          Discount ({`${discount * 100}%`}){' '}
          <span>${(totalPrice * discount).toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between mt-2.5 text-2xl">
        Subtotal <span>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

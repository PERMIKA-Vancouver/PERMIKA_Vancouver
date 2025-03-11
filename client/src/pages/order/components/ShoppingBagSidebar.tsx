// ShoppingBagSidebar.tsx
import React from 'react';

interface ShoppingBagSidebarProps {
  shoppingBag: {
    quantity: number;
    size: string;
    model: string;
    price: number;
    image: string;
  }[];
}

export const ShoppingBagSidebar: React.FC<ShoppingBagSidebarProps> = ({
  shoppingBag,
}) => {
  return (
    <div className="px-[6.3%] mt-10 order-2 lg:px-0 lg:mt-0 lg:order-1 flex-none">
      <div className="mb-[50px] checkout-label">
        <h2>Shopping Bag</h2>
      </div>
      <div>
        {shoppingBag.map((item, index) =>
          item.model ? (
            <div
              key={index}
              className="block max-w-sm p-6 mb-3 mr-3 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <img className="rounded-t-lg" src={item.image} alt={item.model} />
              <h5 className="text-center mb-2 text-2xl tracking-tight text-gray-900">
                {item.model}
              </h5>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

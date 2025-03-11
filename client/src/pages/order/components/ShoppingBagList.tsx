import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FaTrash } from 'react-icons/fa';
import {
  SIZES,
  MODELS,
  DEFAULT_SELECTED_ITEM,
  SHOPPING_BAG_TYPE,
  BUNDLE_OPTIONS,
  NO_NEED_SIZE,
} from '../data/data';
import { BundleList } from './BundleList';

interface ShoppingBagListProps {
  page: string;
  shoppingBag: SHOPPING_BAG_TYPE[];
  handleQuantityChange: (index: number, newQuantity: number) => void;
  handleAddItem: () => void;
  handleRemoveItem: (index: number) => void;
  handleSizeChange: (index: number, size: any) => void;
  handleChooseItem: (index: number, item: any) => void;
  handleBundleSizeChange: (
    index: number,
    bundleIndex: number,
    size: any
  ) => void;
  handleBundleModelChange: (
    index: number,
    bundleIndex: number,
    model: any
  ) => void;
  readOnly: boolean;
}

export const ShoppingBagList: React.FC<ShoppingBagListProps> = ({
  page,
  shoppingBag,
  handleQuantityChange,
  handleAddItem,
  handleRemoveItem,
  handleSizeChange,
  handleChooseItem,
  handleBundleSizeChange,
  handleBundleModelChange,
  readOnly,
}) => {
  return (
    <div className="Shopping-bag mt-20">
      <div className="shopping flex justify-between mb-3">
        <h2 className="text-[1.875rem] text-[#414141]">Shopping Bag</h2>
        {page === 'checkout' && (
          <button onClick={handleAddItem} className="add-button pr-[2%]">
            Add
          </button>
        )}
      </div>
      {shoppingBag.map((bag, index) => (
        <div>
          <div
            key={index}
            className="shopping-details sm:flex justify-between pl-[1.5%] pr-[2.5%] mt-[10%] sm:pt-[1.5%] sm:mt-0 mb-3"
          >
            <div className="flex w-[90%] sm:w-[48%] justify-between">
              <TextField
                className="quantity w-[30%]"
                id="outlined-flexible"
                label="Qty"
                defaultValue={bag.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value, 10) || 0;
                  handleQuantityChange(index, newQuantity);
                }}
                disabled={readOnly}
              />
              <div className="x flex items-center">X</div>
              <div className="w-[54%]">
                <TextField
                  className="w-full"
                  id="outlined-multiline-sizes"
                  select
                  label="Size*"
                  defaultValue={bag.size}
                  disabled={NO_NEED_SIZE.includes(bag.bundleIdx) || readOnly}
                >
                  {SIZES.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      onClick={() => handleSizeChange(index, option)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="justify-between flex sm:w-[50%] mt-3 sm:mt-0">
              <div className="w-[90%]">
                <TextField
                  className="w-full"
                  id="outlined-multiline-sizes"
                  select
                  label="Select your item*"
                  defaultValue={bag.model}
                  onChange={(e) => {
                    const selected =
                      MODELS.find((model) => model.value === e.target.value) ||
                      DEFAULT_SELECTED_ITEM;
                    handleChooseItem(index, selected);
                  }}
                  disabled={readOnly}
                >
                  {MODELS.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      onClick={() => handleChooseItem(index, option)}
                      disabled={readOnly}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              {page === 'checkout' && (
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="remove-button px-[2%]"
                >
                  <FaTrash className="text-grey-body w-5 h-auto" />
                </button>
              )}
            </div>
          </div>
          {bag.isBundle && (
            <div>
              <BundleList
                index={index}
                options={
                  BUNDLE_OPTIONS.find(
                    (option) => option.bundle === bag.bundleIdx
                  )?.options || []
                }
                bundleBag={bag.bundle}
                handleBundleSizeChange={handleBundleSizeChange}
                handleBundleModelChange={handleBundleModelChange}
                readOnly={false}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

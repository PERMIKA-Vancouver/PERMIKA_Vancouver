import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FaTrash } from 'react-icons/fa';
import { SIZES, MODELS, DEFAULT_SELECTED_ITEM } from '../data/data';

interface BundleListProps {
  index: number;
  page: string;
  bundle: {
    label: string;
    options: string[];
  }[];
  bundleBag: {
    size: string;
    model: string;
  }[];
  handleQuantityChange: (index: number, newQuantity: number) => void;
  handleAddItem: () => void;
  handleRemoveItem: (index: number) => void;
  handleSizeChange: (index: number, size: any) => void;
  handleChooseItem: (index: number, item: any) => void;
  readOnly: boolean;
}

export const BundleList: React.FC<BundleListProps> = ({
  index,
  page,
  bundle,
  bundleBag,
  handleQuantityChange,
  handleAddItem,
  handleRemoveItem,
  handleSizeChange,
  handleChooseItem,
  readOnly,
}) => {
  return (
    <div className="bundle-list">
      {bundle.map((item, i) => (
        <div
          key={i}
          className="shopping-details sm:flex justify-between pl-[1.5%] pr-[2.5%] mt-[10%] sm:pt-[1.5%] sm:mt-0 mb-3"
        >
          <div className="flex w-[90%] sm:w-[48%] justify-between">
            <TextField
              className="quantity w-[30%]"
              id="outlined-flexible"
              label="Qty"
              value={'1'}
              disabled={true}
            />
            <div className="x flex items-center">X</div>
            <div className="w-[54%]">
              <TextField
                className="w-full"
                id="outlined-multiline-sizes"
                select
                label="Size*"
                defaultValue={bundleBag[index].size}
                disabled={readOnly}
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
                defaultValue={bundleBag[index].model}
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
      ))}
    </div>
  );
};

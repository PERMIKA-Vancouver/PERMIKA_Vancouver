import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {
  SIZES,
  MODELS,
  DEFAULT_SELECTED_ITEM,
  NO_NEED_SIZE,
} from '../data/data';

interface BundleListProps {
  index: number;
  options: { label: string; options: string[] }[];
  bundleBag: {
    model: string;
    size: string;
  }[];
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

export const BundleList: React.FC<BundleListProps> = ({
  index,
  options,
  bundleBag,
  handleBundleSizeChange,
  handleBundleModelChange,
  readOnly,
}) => {
  return (
    <div className="bundle-list">
      {bundleBag.map((bag, i) => (
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
                defaultValue={bag.size}
                disabled={
                  NO_NEED_SIZE.includes(options[i].options[0]) || readOnly
                }
              >
                {SIZES.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    onClick={() => handleBundleSizeChange(index, i, option)}
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
                  handleBundleModelChange(index, i, selected);
                }}
                disabled={readOnly}
              >
                {options[i].options.map((option) => (
                  <MenuItem
                    key={option}
                    value={option}
                    onClick={() => handleBundleModelChange(index, i, option)}
                    disabled={readOnly}
                  >
                    {MODELS.find((model) => model.value === option)?.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

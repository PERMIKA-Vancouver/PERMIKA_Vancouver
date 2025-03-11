// CheckoutForm.tsx
import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { LOCATIONS } from '../data/data';

interface CheckoutFormProps {
  state: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    pickupLocation: string;
  };
  handleFieldChange: (field: string, value: string) => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  state,
  handleFieldChange,
}) => {
  return (
    <form className="checkout-form">
      <div className="name sm:flex justify-between sm:gap-5">
        <TextField
          className="w-full sm:basis-[49%]"
          label="First Name*"
          value={state.firstName}
          onChange={(e) => handleFieldChange('firstName', e.target.value)}
        />
        <TextField
          className="w-full sm:basis-[49%]"
          label="Last Name*"
          value={state.lastName}
          onChange={(e) => handleFieldChange('lastName', e.target.value)}
        />
      </div>
      <div className="pt-[3%]">
        <TextField
          className="w-full"
          label="Email Address*"
          value={state.email}
          onChange={(e) => handleFieldChange('email', e.target.value)}
        />
      </div>
      <div className="phone-number flex justify-between pt-[3%] gap-5">
        <TextField
          className="flex-auto"
          label="Phone Number*"
          value={state.phoneNumber}
          onChange={(e) => handleFieldChange('phoneNumber', e.target.value)}
        />
      </div>
      <div className="pickup-location pt-[3%]">
        <TextField
          className={`w-full`}
          select
          label="Pick-Up Location*"
          value={state.pickupLocation}
          onChange={(e) => handleFieldChange('pickupLocation', e.target.value)}
        >
          {LOCATIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

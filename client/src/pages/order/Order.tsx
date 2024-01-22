import { ShoppingBag } from './components/ShoppingBag';
import * as React from 'react';
import TextField from '@mui/material/TextField';

export const Order = () => {
  return (
    <div className="pt-navbar ml-all h-screen">
      <ShoppingBag />
      <div className= "Checkout-details"></div>
        <div className= "Checkout"></div>
          <div className = "checkout-outer"></div>
            <div className='checkout-label'><h1>Checkout</h1></div>
            <div className='checkout-information'></div>
          <form className= "checkout-form"></form>
            <div className= "name"></div>
              <input className='first-name'></input>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
              <input className='last-name'></input>
            <input className= "email-address"></input>
            <div className= "phone-number"></div>
              <input className='prefix'></input>
              <input className='suffix'></input>
            <form className= "pickup-location"></form>
        <div className='Shopping-bag'></div>
          <div className='shopping-label'></div>
          <form className='shopping-details'></form>
            <input className='quantity'></input>
            <input className='x'></input>
            <input className='size'></input>
            <input className='item'></input>
            <input className='remove-button'></input>
        <button className='next-page'></button>
    </div>
  );

};

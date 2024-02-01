import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import {
  LOCATIONS,
  SIZES,
  MODELS,
  DISCOUNT,
  DISCOUNT_DEADLINE,
} from './data/data';
import axios from 'axios';
import { openExternalLink } from '../../shared/utils/OpenLinkUtil';
import dayjs from 'dayjs';
import { IoMdInformationCircle } from 'react-icons/io';
import { PopUpMessage } from '../../shared/components/PopUpMessage';

const DEFAULT_SHOPPING_BAG = {
  quantity: 0,
  size: '',
  model: '',
  price: 0,
};

const DEFAULT_SELECTED_ITEM = {
  value: '',
  label: '',
  price: 0,
};

const SERVER = process.env.REACT_APP_SERVER;

export const Order = () => {
  const [page, setPage] = useState<
    'checkout' | 'review' | 'payment' | 'confirmation'
  >('checkout');
  const [shoppingBag, setShoppingBag] = useState([DEFAULT_SHOPPING_BAG]);
  const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECTED_ITEM);
  const [numItems, setNumItems] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [pickupLocationError, setPickupLocationError] = useState(false);

  const [paymentClicked, setPaymentClicked] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState('');
  const [popUpOpen, setPopUpOpen] = useState(false);

  const isDiscount = dayjs().isBefore(
    dayjs(DISCOUNT_DEADLINE, 'YYYY-MM-DD HH:mm')
  );

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedShoppingBag = [...shoppingBag];
    updatedShoppingBag[index].quantity = newQuantity;
    setShoppingBag(updatedShoppingBag);

    // Recalculate total number of items
    const totalQuantity = updatedShoppingBag.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setNumItems(totalQuantity);
  };

  const handleAddItem = () => {
    if (selectedItem) {
      const newItem = {
        ...DEFAULT_SHOPPING_BAG,
        quantity: 0,
        price: selectedItem.price,
        item: selectedItem.label,
      };
      setShoppingBag([...shoppingBag, newItem]);
      setNumItems(numItems + 1);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedShoppingBag = [...shoppingBag];
    const removedItem = updatedShoppingBag.splice(index, 1)[0];
    setShoppingBag(updatedShoppingBag);
    setNumItems(numItems - removedItem.quantity);
  };

  const getTotalPrice = React.useCallback(() => {
    let totalPrice = 0;
    for (const item of shoppingBag) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }, [shoppingBag]);

  const totalPrice = shoppingBag.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  let subtotal = totalPrice;
  let disc = 0;
  if (isDiscount) {
    disc = totalPrice * DISCOUNT;
    subtotal -= disc;
  }

  const isTotalsVisible = shoppingBag.some(
    (item) => item.quantity > 0 && item.size && item.model
  );

  const handleSizeChange = (index: number, size: (typeof SIZES)[number]) => {
    if (page !== 'checkout') return;

    setShoppingBag((prev) => {
      return prev.map((bag, idx) =>
        idx !== index ? bag : { ...bag, size: size.label }
      );
    });
  };

  const handleChooseItem = (index: number, item: (typeof MODELS)[number]) => {
    if (page !== 'checkout') return;

    setShoppingBag((prev) => {
      return prev.map((bag, idx) =>
        idx !== index ? bag : { ...bag, model: item.label, price: item.price }
      );
    });
  };

  const handleNextPage = () => {
    if (page === 'checkout') {
      // Check if total price is zero
      if (getTotalPrice() <= 0) {
        setFirstNameError(true); // Set error state if total price is zero
        return;
      }

      // Check if first name is provided
      if (!firstName.trim()) {
        setFirstNameError(true); // Set error state if first name is not provided
        setPopUpMessage('Please enter your first name!');
        setPopUpOpen(true);
        return;
      }

      // Check if last name is provided
      if (!lastName.trim()) {
        setLastNameError(true);
        setPopUpMessage('Please enter your last name!');
        setPopUpOpen(true);
        return;
      } else {
        setLastNameError(false);
      }

      // Check if email is provided
      if (!email.trim() || !email.includes('@') || !email.includes('.')) {
        setEmailError(true);
        setPopUpMessage(
          "Please enter your email address or check it's in the right format!"
        );
        setPopUpOpen(true);
        return;
      } else {
        setEmailError(false);
      }

      // Check if phone number is provided
      if (!phoneNumber.trim() || isNaN(Number(phoneNumber))) {
        setPhoneNumberError(true);
        setPopUpMessage(
          'Please enter your phone number! (only numbers allowed)'
        );
        setPopUpOpen(true);
        return;
      } else {
        setPhoneNumberError(false);
      }

      // Check if pick-up location is provided
      if (!pickupLocation.trim()) {
        setPickupLocationError(true);
        setPopUpMessage('Please choose a pick up location!');
        setPopUpOpen(true);
        return;
      } else {
        setPickupLocationError(false);
      }

      // Proceed to the next page if all checks pass
      setPage('review');
    } else if (page === 'review') {
      // Proceed to the payment page after finishing the review
      checkAvailability(false).then((available) => {
        if (available) {
          handlePayment();
        }
      });
    } else if (page === 'payment') {
      // Check if the file is uploaded
      if (paymentClicked) {
        // If the file is uploaded, proceed to the confirmation page
        checkAvailability(true).then((available) => {
          if (available) {
            handleSubmitOrder();
          } else {
            setPopUpMessage(
              'If you have paid, please contact us at our instagram to process the refund. Sorry for the inconvenience.'
            );
            setPopUpOpen(true);
          }
        });
      } else {
        // If the file is not uploaded, proceed to the payment page
        setPage('payment');
      }
    } else {
      setPage('confirmation'); // Assuming this is the last step after payment and file upload
    }
  };

  const checkAvailability = async (payment: boolean): Promise<boolean> => {
    console.log(SERVER);
    return new Promise((resolve, reject) => {
      axios
        .get(`${SERVER}/order/merchandise`)
        .then((res) => {
          res.data.data.forEach((item: any) => {
            const initialValue = 0;
            const total = shoppingBag.reduce(
              (accumulator, bag) =>
                bag.model === item.model && bag.size === item.size
                  ? accumulator + bag.quantity
                  : accumulator,
              initialValue
            );

            const itemStock = payment
              ? item.stock - item.bought
              : item.stock - item.bought - item.pending;
            if (total > itemStock) {
              setPopUpMessage(
                `${item.model} ${item.size} has only ${itemStock} in stock left.`
              );
              setPopUpOpen(true);
              resolve(false);
            }
          });
          resolve(true);
        })
        .catch((err) => {
          resolve(false);
        });
    });
  };

  const handlePayment = () => {
    axios.get(`${SERVER}/order/merchandise`).then((res) => {
      let proceedPayment = true;
      for (let bag of shoppingBag) {
        const merchandise = res.data.data.find(
          (item: any) => item.model === bag.model && item.size === bag.size
        );
        if (!merchandise) {
          setPopUpMessage(`${bag.model} has no size ${bag.size}`);
          setPopUpOpen(true);
          proceedPayment = false;
        }
      }

      if (proceedPayment) {
        for (let bag of shoppingBag) {
          const id = bag.model + ' ' + bag.size;
          const merchandise = res.data.data.find(
            (item: any) => item.model === bag.model && item.size === bag.size
          );
          const data = {
            pending: merchandise.pending + bag.quantity,
            bought: merchandise.bought,
          };
          axios
            .put(`${SERVER}/order/merchandise/${id}`, data)
            .then(() => {
              setPage('payment');
            })
            .catch((err) => {
              alert('Error occured: ' + err.message + '. Please try again!');
              setPage('review');
            });
        }
      } else {
        setPage('review');
      }
    });
  };

  const handleSubmitOrder = () => {
    axios.get(`${SERVER}/order/merchandise`).then((res) => {
      shoppingBag.forEach((bag) => {
        const id = bag.model + ' ' + bag.size;
        const merchandise = res.data.data.find(
          (item: any) => item.model === bag.model && item.size === bag.size
        );
        const data = {
          pending: merchandise.pending - bag.quantity,
          bought: merchandise.bought + bag.quantity,
        };
        axios
          .put(`${SERVER}/order/merchandise/${id}`, data)
          .then(() => {
            const location = LOCATIONS.find(
              (loc) => loc.value === pickupLocation
            );
            const dataOrder = {
              firstName,
              lastName,
              emailAddress: email,
              phoneNumber,
              pickUpLocation: location?.label,
              items: shoppingBag,
              totalPrice: subtotal,
            };

            axios
              .post(`${SERVER}/order`, dataOrder)
              .then(() => {
                setPage('confirmation');
              })
              .catch((err) => {
                alert('An error happened: ' + err.message);
                setPage('payment');
              });
          })
          .catch((err) => {
            alert('An error happened: ' + err.message);
            setPage('payment');
          });
      });
    });
  };

  return (
    <div className="flex pt-navbar py-20 ml-all min-h-screen">
      {/* Pop Up */}
      <PopUpMessage
        open={popUpOpen}
        handleClose={() => setPopUpOpen(false)}
        message={popUpMessage}
      />

      {/* <ShoppingBag /> */}

      <div className="Checkout-details pl-[6.3%] w-[100%] pr-[12%]">
        <div className="Checkout">
          <div className="checkout-outer mb-[50px]">
            <div className="checkout-label flex justify-between items-center">
              <h2>
                {page === 'review'
                  ? 'Review Order'
                  : page === 'payment'
                  ? 'Payment Details'
                  : page === 'confirmation'
                  ? 'Thank you for your purchase!'
                  : 'Order'}
              </h2>
              {page === 'review' && (
                <button onClick={() => setPage('checkout')}>Edit</button>
              )}
              {page === 'checkout' && (
                <IoMdInformationCircle
                  className="w-7 h-auto text-grey-body"
                  onClick={() =>
                    openExternalLink(
                      'https://drive.google.com/file/d/1Swg0aOP7Nh_XmDY7ceCWxJkeAcGVq8uS/view?usp=sharing'
                    )
                  }
                />
              )}
            </div>
            <div className="checkout-information"></div>
          </div>
          {page !== 'payment' && page !== 'confirmation' && (
            <form className="checkout-form">
              <div className="name sm:flex justify-between sm:gap-5">
                <TextField
                  className={`w-full sm:basis-[49%] ${
                    firstNameError ? 'error' : ''
                  }`}
                  id="outlined-multiline-flexible"
                  label="First Name*"
                  multiline
                  maxRows={4}
                  disabled={page !== 'checkout'}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setFirstNameError(false);
                  }}
                />
                <TextField
                  className={`w-full sm:basis-[49%] ${
                    lastNameError ? 'error' : ''
                  } !mt-[3%] sm:!mt-0`}
                  id="outlined-multiline-flexible"
                  label="Last Name*"
                  multiline
                  maxRows={4}
                  disabled={page !== 'checkout'}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setLastNameError(false);
                  }}
                />
              </div>
              <div className="pt-[3%]">
                <TextField
                  className={`w-full ${emailError ? 'error' : ''}`}
                  label="Email Address*"
                  multiline
                  maxRows={4}
                  fullWidth
                  disabled={page !== 'checkout'}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                />
              </div>
              <div className="phone-number flex justify-between pt-[3%] gap-5">
                <TextField
                  className={`flex-auto ${phoneNumberError ? 'error' : ''}`}
                  id="outlined-multiline-flexible"
                  label="Phone Number*"
                  multiline
                  maxRows={4}
                  disabled={page !== 'checkout'}
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setPhoneNumberError(false);
                  }}
                />
              </div>

              <form className="pickup-location pt-[3%]">
                <TextField
                  className={`w-full ${pickupLocationError ? 'error' : ''}`}
                  select
                  label="Pick-Up Location*"
                  fullWidth
                  disabled={page !== 'checkout'}
                  value={pickupLocation}
                  onChange={(e) => {
                    setPickupLocation(e.target.value);
                    setPickupLocationError(false);
                  }}
                >
                  {LOCATIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </form>
            </form>
          )}
        </div>

        {/* Shopping Bag */}
        {page !== 'confirmation' && (
          <div className="Shopping-bag mt-20">
            <div className="shopping flex justify-between mb-3">
              <h1 className="text-4xl">Shopping Bag</h1>
              {page === 'checkout' && (
                <button onClick={handleAddItem} className="add-button pr-[2%]">
                  Add
                </button>
              )}
            </div>

            {shoppingBag.map((bag, index) => (
              <div
                key={index}
                className="shopping-details sm:flex justify-between pl-[1.5%] pr-[2.5%] mt-[10%] sm:pt-[1.5%] sm:mt-0 mb-3"
              >
                <div className="flex w-[90%] sm:w-[48%] justify-between">
                  <TextField
                    className="quantity w-[30%]"
                    id="outlined-flexible"
                    label="Qty"
                    value={bag.quantity}
                    onChange={(event) => {
                      if (page !== 'checkout') return;
                      const newQuantity = parseInt(event.target.value, 10) || 0;
                      handleQuantityChange(index, newQuantity);
                    }}
                    disabled={page !== 'checkout'}
                  />
                  <div className="x flex items-center">X</div>
                  <div className="w-[54%]">
                    <TextField
                      className="w-full"
                      id="outlined-multiline-sizes"
                      select
                      label="Size*"
                      defaultValue={bag.size}
                      disabled={page !== 'checkout'}
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
                      onChange={(event) => {
                        const selectedItemValue = event.target.value;
                        const selected =
                          MODELS.find(
                            (model) => model.value === selectedItemValue
                          ) || DEFAULT_SELECTED_ITEM;
                        setSelectedItem(selected);
                      }}
                      disabled={page !== 'checkout'}
                    >
                      {MODELS.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          onClick={() => handleChooseItem(index, option)}
                          disabled={page !== 'checkout'}
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
                      X
                    </button>
                  )}
                </div>
              </div>
            ))}
            {getTotalPrice() > 0 && (
              <div className="">
                <div className="totals font-light">
                  <div className="text-[#9A9A9A] flex justify-between">
                    Merchandise Total{' '}
                    <span className="">${totalPrice.toFixed(2)}</span>
                  </div>
                  {isDiscount && (
                    <div className="text-[#9A9A9A] flex justify-between">
                      Discount ({`${DISCOUNT * 100}%`})
                      <span>${disc.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between mt-2.5 text-2xl">
                    Subtotal <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
            {page === 'payment' && (
              <div className="payment-form mt-10">
                {/* Additional payment details and upload picture form*/}
                {/* You can add your form fields here */}
                <div className="upload-picture pt-[5%]">
                  <h1 className="payment-label text-4xl">Payment</h1>
                  <p className="payment-description pt-[2%] text-grey-body">
                    Please access the link below and pay your total amount
                    there.
                  </p>
                  <p
                    onClick={() => {
                      setPaymentClicked(true);
                      openExternalLink('https://forms.gle/wSxUEACu6ydqegVh9');
                    }}
                    className="text-blue-600 cursor-pointer text-xl"
                  >
                    Click here
                  </p>
                </div>
              </div>
            )}
            {!isTotalsVisible && shoppingBag.length === 0 && <div></div>}
            {page === 'payment' ? (
              <button
                className="bg-[#D07D14] w-full rounded-md text-white py-1.5 text-lg mt-7 disabled:bg-gray-400"
                onClick={handleNextPage}
                disabled={getTotalPrice() <= 0 || !paymentClicked}
              >
                Submit Order
              </button>
            ) : (
              <button
                className="bg-[#D07D14] w-full rounded-md text-white py-1.5 text-lg mt-7 disabled:bg-gray-400"
                onClick={() => handleNextPage()}
                disabled={getTotalPrice() <= 0}
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

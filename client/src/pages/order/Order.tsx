import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChangeEvent, useState } from 'react';
import { LOCATIONS, SIZES, HOODIESIZES, MODELS } from './data/data';
import axios from 'axios';

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

export const Order = () => {
  const [page, setPage] = useState<
    'checkout' | 'review' | 'payment' | 'confirmation'
  >('checkout');
  const [shoppingBag, setShoppingBag] = useState([DEFAULT_SHOPPING_BAG]);
  const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECTED_ITEM);
  const [numItems, setNumItems] = useState(0);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [selectedItemType, setSelectedItemType] = useState('');

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
    // setShoppingBag([...shoppingBag, DEFAULT_SHOPPING_BAG]);

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
  const discount = 0.1;
  const disc = totalPrice * discount;
  const subtotal = totalPrice - disc;

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

  const handleHoodieSizeChange = (
    index: number,
    size: (typeof HOODIESIZES)[number]
  ) => {
    if (page !== 'checkout') return;

    setShoppingBag((prev) => {
      return prev.map((bag, idx) =>
        idx !== index ? bag : { ...bag, size: size.label }
      );
    });
  };

  const handleChooseItem = (index: number, item: (typeof MODELS)[number]) => {
    if (page !== 'checkout') return;

    // Set the selected item type based on the chosen item
    if (item.value === '1' || item.value === '2') {
      setSelectedItemType('hoodie');
    } else {
      setSelectedItemType('');
    }

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
        return;
      }

      // Check if last name is provided
      if (!lastName.trim()) {
        setLastNameError(true);
        return;
      } else {
        setLastNameError(false);
      }

      // Check if email is provided
      if (!email.trim() || !email.includes('@') || !email.includes('.')) {
        setEmailError(true);
        return;
      } else {
        setEmailError(false);
      }

      // Check if phone number is provided
      if (!phoneNumber.trim() || isNaN(Number(phoneNumber))) {
        setPhoneNumberError(true);
        return;
      } else {
        setPhoneNumberError(false);
      }

      // Check if pick-up location is provided
      if (!pickupLocation.trim()) {
        setPickupLocationError(true);
        return;
      } else {
        setPickupLocationError(false);
      }

      // Proceed to the next page if all checks pass
      setPage('review');
    } else if (page === 'review') {
      // Proceed to the payment page after finishing the review
      checkAvailability().then((available) => {
        if (available) {
          setPage('payment');
        }
      });
    } else if (page === 'payment') {
      // Check if the file is uploaded
      if (fileUploaded) {
        // If the file is uploaded, proceed to the confirmation page
        checkAvailability().then((available) => {
          if (available) {
            handleSubmitOrder();
          } else {
            alert(
              'If you have paid, please contact us at our instagram to process the refund. Sorry for the inconvenience.'
            );
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

  const checkAvailability = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      axios
        .get('http://localhost:4000/order/merchandise')
        .then((res) => {
          res.data.data.map((item: any) => {
            const itemName = item.model;
            const initialValue = 0;
            const total = shoppingBag.reduce(
              (accumulator, bag) =>
                bag.model === itemName
                  ? accumulator + bag.quantity
                  : accumulator,
              initialValue
            );
            const itemStock = item.stock - item.bought - item.pending;
            if (total > itemStock) {
              alert(item.model + ' has only ' + itemStock + ' in stock left.');
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

  const handleSubmitOrder = () => {
    const data = {
      firstName,
      lastName,
      emailAddress: email,
      phoneNumber,
      pickUpLocation: pickupLocation,
      items: shoppingBag,
      totalPrice,
      payment: 'link',
    };
    axios
      .post('http://localhost:4000/order', data)
      .then(() => {
        setPage('confirmation');
      })
      .catch((err) => {
        alert('An error happened: ' + err.message);
        setPage('payment');
      });
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];

    if (uploadedFile) {
      // Check if the file type is an image (you can customize this check based on your specific requirements)
      const isImage = uploadedFile.type.startsWith('image/');

      if (isImage) {
        setFileUploaded(true);
        // You may want to store the uploaded file for further use, for example, displaying the image
        // You can save it in the state or send it to the server as needed.
        // For simplicity, I'll just log the file information for now.
        console.log('Uploaded file:', uploadedFile);
      } else {
        // Handle the case where the uploaded file is not an image (e.g., show an error message)
        console.error('Invalid file type. Please upload an image.');
      }
    }
  };

  return (
    <div className="flex pt-navbar py-20 ml-all min-h-screen">
      {/* <ShoppingBag /> */}

      <div className="Checkout-details pl-[6.3%] w-[100%] pr-[12%]">
        <div className="Checkout">
          <div className="checkout-outer mb-[50px]">
            <div className="checkout-label flex justify-between">
              <h2>
                {page === 'review'
                  ? 'Review Order'
                  : page === 'payment'
                  ? 'Payment Details'
                  : page === 'confirmation'
                  ? 'Thank you for your purchase!'
                  : 'Checkout'}
              </h2>
              {page === 'review' && (
                <button onClick={() => setPage('checkout')}>Edit</button>
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
          <div className="Shopping-bag mt-10">
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
                className="shopping-details flex justify-between pl-[1.5%] pr-[2.5%] pt-[1.5%] mb-3"
              >
                <TextField
                  className="quantity w-[15%]"
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
                <div className="justify-between flex w-[80%]">
                  <div className="w-[27%]">
                    <TextField
                      className="w-full"
                      id="outlined-multiline-sizes"
                      select
                      label="Size*"
                      defaultValue={bag.size}
                      disabled={page !== 'checkout'}
                    >
                      {selectedItemType === 'hoodie'
                        ? HOODIESIZES.map((option) => (
                            <MenuItem
                              key={option.value}
                              value={option.value}
                              onClick={() =>
                                handleHoodieSizeChange(index, option)
                              }
                            >
                              {option.label}
                            </MenuItem>
                          ))
                        : SIZES.map((option) => (
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
                  <div className="w-[67%]">
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
                  <div className="text-[#9A9A9A] flex justify-between">
                    Discount (10%) <span>${disc.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mt-2.5 text-2xl">
                    Subtotal <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
            {page === 'payment' && (
              <form className="payment-form">
                {/* Additional payment details and upload picture form*/}
                {/* You can add your form fields here */}
                <div className="upload-picture pt-[5%]">
                  <h1 className="payment-label text-4xl">Payment</h1>
                  <p
                    style={{ color: 'grey', fontSize: '14px' }}
                    className="payment-description pt-[2%]"
                  >
                    Please send the total of your order to the following email
                    address:
                  </p>
                  <p
                    style={{ color: 'grey', fontSize: '14px' }}
                    className="payment-description2"
                  >
                    treasurer.permika@gmail.com and make sure to attach your
                    proof of payment below.
                  </p>
                  <TextField
                    type="file"
                    fullWidth
                    disabled={page !== 'payment'}
                    onChange={handleFileUpload}
                  />
                </div>
              </form>
            )}
            {!isTotalsVisible && shoppingBag.length === 0 && <div></div>}
            <button
              className="bg-[#D07D14] w-full rounded-md text-white py-1.5 text-lg mt-7 disabled:bg-gray-400"
              onClick={() => handleNextPage()}
              disabled={getTotalPrice() <= 0}
            >
              {page === 'payment' ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

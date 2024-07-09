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
import { FaTrash } from 'react-icons/fa';
import { PopUpMessage } from '../../shared/components/PopUpMessage';
import { CustomButton } from '../../shared/components/CustomButton';
import { Button, InputBase } from '@mui/material';

const DEFAULT_SHOPPING_BAG = {
  quantity: 0,
  size: '',
  model: '',
  price: 0,
  image: '',
};

const DEFAULT_SELECTED_ITEM = {
  value: '',
  label: '',
  price: 0,
  image: '',
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

  const [promoCode, setPromoCode] = useState('');
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);
  const [isPromoCodeInvalid, setIsPromoCodeInvalid] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  const [paymentClicked, setPaymentClicked] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState('');
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [submitOrderClicked, setSubmitOrderClicked] = useState(false);

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
        image: selectedItem.image,
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
        idx !== index
          ? bag
          : { ...bag, model: item.label, price: item.price, image: item.image }
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
      // edited at 7-7-2024 for pre-ordering capabilities (removed checking availabilities)
    } else if (page === 'review') {
      // Proceed to the payment page after finishing the review
      // checkAvailability(false).then((available) => {
      //   if (available) {
      //     handlePayment();
      //   })
      checkAvailableSize().then((available) => {
        if (available) {
          handlePayment();
        }
      });
    } else if (page === 'payment') {
      // Check if the file is uploaded
      if (paymentClicked) {
        // If the file is uploaded, proceed to the confirmation page
        //   checkAvailability(true).then((available) => {
        //     if (available) {
        //       handleSubmitOrder();
        //     } else {
        //       setPopUpMessage(
        //         'If you have paid, please contact us at our instagram to process the refund. Sorry for the inconvenience.'
        //       );
        //       setPopUpOpen(true);
        //     }
        //   });
        // }
        handleSubmitOrder();
      } else {
        // If the file is not uploaded, proceed to the payment page
        setPage('payment');
      }
    } else {
      setPage('confirmation'); // Assuming this is the last step after payment and file upload
    }
  };

  // ############ COMMENTED BECAUSE OF PREORDER ###############
  // const checkAvailability = async (payment: boolean): Promise<boolean> => {
  //   console.log(SERVER);
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get(`${SERVER}/order/merchandise`)
  //       .then((res) => {
  //         res.data.data.forEach((item: any) => {
  //           const initialValue = 0;
  //           const total = shoppingBag.reduce(
  //             (accumulator, bag) =>
  //               bag.model === item.model && bag.size === item.size
  //                 ? accumulator + bag.quantity
  //                 : accumulator,
  //             initialValue
  //           );

  //           const itemStock = payment
  //             ? item.stock - item.bought
  //             : item.stock - item.bought - item.pending;
  //           if (total > itemStock) {
  //             setPopUpMessage(
  //               `${item.model} ${item.size} has only ${itemStock} in stock left.`
  //             );
  //             setPopUpOpen(true);
  //             resolve(false);
  //           }
  //         });
  //         resolve(true);
  //       })
  //       .catch((err) => {
  //         resolve(false);
  //       });
  //   });
  // };

  const checkAvailableSize = async (): Promise<boolean> => {
    try {
      const checkSizes = shoppingBag.map((item: any) => {
        return axios
          .get(`${SERVER}/order/merchandise/${item.model} ${item.size}`)
          .then((res) => {
            if (!res.data.data) {
              setPopUpMessage(`${item.model} does not have size ${item.size}.`);
              setPopUpOpen(true);
              return false;
            }
            return true;
          })
          .catch((err) => {
            setPopUpMessage(`${item.model} does not have size ${item.size}.`);
            setPopUpOpen(true);
            return false;
          });
      });

      const results = await Promise.all(checkSizes);

      return results.every((result) => result);
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handlePayment = () => {
    axios.get(`${SERVER}/order/merchandise`).then((res) => {
      let proceedPayment = true;
      for (let bag of shoppingBag) {
        const merchandise = res.data.data.find(
          (item: any) => item.model === bag.model && item.size === bag.size
        );
        console.log(merchandise);
        // another merchandise checking
        // if (!merchandise) {
        //   setPopUpMessage(`${bag.model} has no size ${bag.size}`);
        //   setPopUpOpen(true);
        //   proceedPayment = false;
        // }
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
              setFinalPrice(subtotal);
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

            let dataOrder;
            if (isPromoCodeApplied) {
              dataOrder = {
                firstName,
                lastName,
                emailAddress: email,
                phoneNumber,
                pickUpLocation: location?.label,
                items: shoppingBag,
                totalPrice: subtotal,
                promoCode: promoCode,
              };
            } else {
              dataOrder = {
                firstName,
                lastName,
                emailAddress: email,
                phoneNumber,
                pickUpLocation: location?.label,
                items: shoppingBag,
                totalPrice: subtotal,
              };
            }

            axios
              .post(`${SERVER}/order`, dataOrder)
              .then(() => {
                // const data = {
                //   promoCode: promoCode,
                //   claimed: true,
                // };
                // axios
                //   .put(`${SERVER}/order/promocode`, data)
                //   .then(() => {
                //     setPage("confirmation");
                //   })
                //   .catch((err) => {
                //     console.log(err);
                //     alert("An error happened: " + err.message);
                //     setPage("payment");
                //   });
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

  const handleApplyPromoCode = () => {
    axios
      .get(`${SERVER}/order/promocode/${promoCode}`)
      .then((res) => {
        if (!res.data || res.data.pending || res.data.claimed) {
          setIsPromoCodeInvalid(true);
          setPromoCode('');
          return;
        }

        const data = {
          promoCode: promoCode,
          pending: true,
        };

        axios
          .put(`${SERVER}/order/promocode`, data)
          .then(() => {
            setIsPromoCodeInvalid(false);
            setIsPromoCodeApplied(true);
            setFinalPrice(finalPrice * (1 - DISCOUNT));
          })
          .catch((err) => {
            alert('An error happened: ' + err.message);
          });
      })
      .catch((err) => {
        alert('An error happened: ' + err.message);
      });
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="order-2 lg:order-1 pt-[5vh] lg:pt-[20vh] flex-none ml-[2%] pl-[6.3%]">
          <div className="mb-[50px] checkout-label">
            <h2>Shopping bag</h2>
          </div>
          {/* Image cards */}
          <div>
            {shoppingBag.map((item, index) => {
              if (item.model) {
                return (
                  <div className="block max-w-sm p-6 mb-3 mr-3 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                    <img className="rounded-t-lg" src={item.image} alt="" />
                    <h5 className="text-center mb-2 text-2xl tracking-tight text-gray-900">
                      {item.model}
                    </h5>
                  </div>
                );
              }
              return <div></div>;
            })}
          </div>
        </div>

        {/* Main content */}
        <div
          className={`lg:order-2 pt-navbar ml-[2%] flex-auto ${
            page === 'confirmation' ? 'w-3/4' : 'w-full'
          }`}
        >
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
                  <h2 className="text-[1.875rem] text-[#414141]">
                    Shopping Bag
                  </h2>
                  {page === 'checkout' && (
                    <button
                      onClick={handleAddItem}
                      className="add-button pr-[2%]"
                    >
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
                          const newQuantity =
                            parseInt(event.target.value, 10) || 0;
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
                          <FaTrash className="text-grey-body w-5 h-auto" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {getTotalPrice() > 0 && (
                  <div className="">
                    {page === 'payment' ? (
                      <div className="text-[#9A9A9A] flex justify-between font-light">
                        Subtotal <span>${subtotal.toFixed(2)}</span>
                      </div>
                    ) : (
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
                    )}
                  </div>
                )}

                {/** PROMO CODE */}
                {page === 'payment' && (
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
                      onChange={(e) => setPromoCode(e.target.value)}
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
                )}

                {/** FINAL TOTAL PRICE */}
                {page === 'payment' && (
                  <div className="mt-4">
                    <div className="totals font-light">
                      {isPromoCodeApplied && (
                        <div className="text-[#9A9A9A] flex justify-between">
                          Discount ({`${DISCOUNT * 100}%`})
                          <span>${(subtotal * DISCOUNT).toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between mt-2.5 text-2xl">
                        Total <span>${finalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}

                {page === 'payment' && (
                  <div className="payment-form mt-10">
                    {/* Additional payment details and upload picture form*/}
                    {/* You can add your form fields here */}
                    <div className="upload-picture pt-[5%]">
                      <h2 className="payment-label text-[1.875rem] text-[#414141]">
                        Payment
                      </h2>
                      <p className="payment-description pt-[2%] text-grey-body">
                        Please access the link below and pay your total amount
                        there.
                      </p>
                      <p
                        onClick={() => {
                          setPaymentClicked(true);
                          openExternalLink(
                            'https://forms.gle/RbuP9j3wqG5ZKAuaA'
                          );
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
                    onClick={() => {
                      setSubmitOrderClicked(true);
                      handleNextPage();
                    }}
                    disabled={
                      getTotalPrice() <= 0 ||
                      !paymentClicked ||
                      submitOrderClicked
                    }
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
            {/* Thank you for purchase */}
            {page === 'confirmation' && (
              <div>
                <h4 className="text-grey-body xl:max-w-[50%]">
                  Your order has been submitted and you will receive a
                  confirmation email from us. We appreciate your support and we
                  can't wait for you to wear them!
                </h4>

                <CustomButton
                  text={'Back to home'}
                  className={'mt-[6.88rem]'}
                  link={'https://permikavancouver.com'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

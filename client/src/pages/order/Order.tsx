// Order.tsx
import { useState, useCallback } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { openExternalLink } from '../../shared/utils/OpenLinkUtil';
import { PopUpMessage } from '../../shared/components/PopUpMessage';
import {
  SIZES,
  MODELS,
  DEFAULT_SELECTED_ITEM,
  DEFAULT_SHOPPING_BAG,
} from './data/data';
import { ShoppingBagSidebar } from './components/ShoppingBagSidebar';
import { CheckoutForm } from './components/CheckoutForm';
import { ShoppingBagList } from './components/ShoppingBagList';
import { PaymentSection } from './components/PaymentSection';
import { ConfirmationPage } from './components/ConfirmationPage';

const SERVER = process.env.REACT_APP_SERVER;

export const Order = () => {
  const [page, setPage] = useState<
    'checkout' | 'review' | 'payment' | 'confirmation'
  >('checkout');
  const [shoppingBag, setShoppingBag] = useState([DEFAULT_SHOPPING_BAG]);
  const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECTED_ITEM);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);
  const [isPromoCodeInvalid, setIsPromoCodeInvalid] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const [paymentClicked, setPaymentClicked] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState('');
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [submitOrderClicked, setSubmitOrderClicked] = useState(false);

  // Helper to determine if discount is active
  // const isDiscountActive = () =>
  //   dayjs().isBefore(dayjs(DISCOUNT_DEADLINE, 'YYYY-MM-DD HH:mm'));

  const getTotalPrice = useCallback(() => {
    return shoppingBag.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [shoppingBag]);

  // Handlers for shopping bag operations
  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedBag = [...shoppingBag];
    updatedBag[index].quantity = newQuantity;
    setShoppingBag(updatedBag);
  };

  const handleAddItem = () => {
    if (selectedItem) {
      const newItem = {
        ...DEFAULT_SHOPPING_BAG,
        quantity: 0,
        price: selectedItem.price,
        model: selectedItem.label,
        image: selectedItem.image,
      };
      setShoppingBag([...shoppingBag, newItem]);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedBag = [...shoppingBag];
    updatedBag.splice(index, 1);
    setShoppingBag(updatedBag);
  };

  const handleSizeChange = (index: number, size: (typeof SIZES)[number]) => {
    if (page !== 'checkout') return;
    const updatedBag = shoppingBag.map((bag, idx) =>
      idx !== index ? bag : { ...bag, size: size.label }
    );
    setShoppingBag(updatedBag);
  };

  const handleChooseItem = (index: number, item: (typeof MODELS)[number]) => {
    if (page !== 'checkout') return;
    const updatedBag = shoppingBag.map((bag, idx) =>
      idx !== index
        ? bag
        : { ...bag, model: item.label, price: item.price, image: item.image }
    );
    setShoppingBag(updatedBag);
    setSelectedItem(item);
  };

  // Field change handler for form inputs
  const handleFieldChange = (field: string, value: string | boolean) => {
    switch (field) {
      case 'firstName':
        setFirstName(value as string);
        break;
      case 'lastName':
        setLastName(value as string);
        break;
      case 'email':
        setEmail(value as string);
        break;
      case 'phoneNumber':
        setPhoneNumber(value as string);
        break;
      case 'pickupLocation':
        setPickupLocation(value as string);
        break;
      case 'promoCode':
        setPromoCode(value as string);
        break;
      case 'paymentClicked':
        setPaymentClicked(value as boolean);
        break;
      default:
        break;
    }
  };

  // Simplified page navigation logic for demonstration
  const handleNextPage = () => {
    if (page === 'checkout') {
      if (getTotalPrice() <= 0) {
        setPopUpMessage('Please add items to your shopping bag.');
        setPopUpOpen(true);
        return;
      }
      if (
        !firstName.trim() ||
        !lastName.trim() ||
        !email.trim() ||
        !phoneNumber.trim() ||
        !pickupLocation.trim()
      ) {
        setPopUpMessage('Please fill out all required fields.');
        setPopUpOpen(true);
        return;
      }
      setPage('review');
    } else if (page === 'review') {
      setPage('payment');
    } else if (page === 'payment') {
      if (!paymentClicked) {
        setPopUpMessage(
          'Please complete payment before submitting your order.'
        );
        setPopUpOpen(true);
        return;
      }
      setPage('confirmation');
    }
  };

  return (
    <div>
      <PopUpMessage
        open={popUpOpen}
        handleClose={() => setPopUpOpen(false)}
        message={popUpMessage}
      />
      <div className="flex flex-col lg:flex-row min-h-screen pt-navbar py-20 ml-[5%]">
        {page !== 'confirmation' && (
          <ShoppingBagSidebar shoppingBag={shoppingBag} />
        )}

        <div
          className={`lg:order-2 ml-[2%] flex-auto ${page === 'confirmation' ? 'w-3/4' : 'w-full'}`}
        >
          <div className="Checkout-details pl-[6.3%] w-[100%] pr-[12%]">
            {page === 'checkout' && (
              <>
                <CheckoutForm
                  state={{
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    pickupLocation,
                  }}
                  handleFieldChange={handleFieldChange}
                />
                <ShoppingBagList
                  page={page}
                  shoppingBag={shoppingBag}
                  handleQuantityChange={handleQuantityChange}
                  handleAddItem={handleAddItem}
                  handleRemoveItem={handleRemoveItem}
                  handleSizeChange={handleSizeChange}
                  handleChooseItem={handleChooseItem}
                />
              </>
            )}
            {page === 'payment' && (
              <PaymentSection
                state={{
                  promoCode,
                  isPromoCodeApplied,
                  isPromoCodeInvalid,
                  finalPrice,
                  paymentClicked,
                }}
                handleFieldChange={handleFieldChange}
                handleApplyPromoCode={() => {
                  // Promo code logic example
                  axios
                    .get(`${SERVER}/order/promocode/${promoCode}`)
                    .then((res) => {
                      if (!res.data || res.data.pending || res.data.claimed) {
                        setIsPromoCodeInvalid(true);
                        setPromoCode('');
                        return;
                      }
                      const data = { promoCode, pending: true };
                      axios
                        .put(`${SERVER}/order/promocode`, data)
                        .then(() => {
                          setIsPromoCodeInvalid(false);
                          setIsPromoCodeApplied(true);
                          setFinalPrice(finalPrice);
                        })
                        .catch((err) => {
                          alert('An error occurred: ' + err.message);
                        });
                    })
                    .catch((err) => {
                      alert('An error occurred: ' + err.message);
                    });
                }}
                openExternalLink={openExternalLink}
              />
            )}
            {page === 'confirmation' && <ConfirmationPage />}
            {page !== 'payment' ? (
              <Button
                onClick={handleNextPage}
                disabled={getTotalPrice() <= 0}
                className="mt-7 hidden lg:block"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setSubmitOrderClicked(true);
                  handleNextPage();
                }}
                disabled={
                  getTotalPrice() <= 0 || !paymentClicked || submitOrderClicked
                }
                className="mt-7"
              >
                Submit Order
              </Button>
            )}
          </div>
        </div>
        {page !== 'confirmation' && page !== 'payment' && (
          <div className="px-[6.3%] order-3 lg:hidden">
            <Button
              onClick={handleNextPage}
              disabled={getTotalPrice() <= 0}
              className="mt-7"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

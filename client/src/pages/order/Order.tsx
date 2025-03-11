// Order.tsx
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { openExternalLink } from "../../shared/utils/OpenLinkUtil";
import { PopUpMessage } from "../../shared/components/PopUpMessage";
import {
  SIZES,
  MODELS,
  DEFAULT_SELECTED_ITEM,
  DEFAULT_SHOPPING_BAG,
} from "./data/data";
import { ShoppingBagSidebar } from "./components/ShoppingBagSidebar";
import { CheckoutForm } from "./components/CheckoutForm";
import { ShoppingBagList } from "./components/ShoppingBagList";
import { PaymentSection } from "./components/PaymentSection";
import { ConfirmationPage } from "./components/ConfirmationPage";
import { TotalsDisplay } from "./components/TotalsDisplay";

const SERVER = process.env.REACT_APP_SERVER;

export const Order = () => {
  const [page, setPage] = useState<
    "checkout" | "review" | "payment" | "confirmation"
  >("checkout");
  const [shoppingBag, setShoppingBag] = useState([DEFAULT_SHOPPING_BAG]);
  const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECTED_ITEM);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeApplied, setIsPromoCodeApplied] = useState(false);
  const [isPromoCodeInvalid, setIsPromoCodeInvalid] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const [paymentClicked, setPaymentClicked] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [submitOrderClicked, setSubmitOrderClicked] = useState(false);

  // Calculate total price based on shopping bag items
  const getTotalPrice = useCallback(() => {
    return shoppingBag.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [shoppingBag]);

  // Stock-checking function: verifies that for each item, quantity does not exceed available stock.
  // The "payment" flag is used to decide whether to consider pending items or not.
  const checkAvailability = (payment: boolean): Promise<boolean> => {
    return axios
      .get(`${SERVER}/order/merchandise`)
      .then((res) => {
        let available = true;
        res.data.data.forEach((item: any) => {
          // Sum quantities for items matching model and size.
          const total = shoppingBag.reduce(
            (acc, bag) =>
              bag.model === item.model && bag.size === item.size
                ? acc + bag.quantity
                : acc,
            0
          );
          const itemStock = payment
            ? item.stock - item.bought
            : item.stock - item.bought - item.pending;
          if (total > itemStock) {
            setPopUpMessage(
              `${item.model} ${item.size} has only ${itemStock} in stock left.`
            );
            setPopUpOpen(true);
            available = false;
          }
        });
        return available;
      })
      .catch(() => false);
  };

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
    if (page !== "checkout") return;
    const updatedBag = shoppingBag.map((bag, idx) =>
      idx !== index ? bag : { ...bag, size: size.label }
    );
    setShoppingBag(updatedBag);
  };

  const handleChooseItem = (index: number, item: (typeof MODELS)[number]) => {
    if (page !== "checkout") return;

    let updatedBag = [...shoppingBag]; // Copy the current shopping bag

    // If the selected item is "Bundle Tote + Kaos", replace it with multiple items
    if (item.label === "Bundle Tote + Kaos") {
      const bundleItems = [
        {
          model: MODELS[2].label,
          price: MODELS[2].price,
          image: MODELS[2].image,
          size: "M",
          quantity: 1,
        },
        {
          model: MODELS[3].label,
          price: MODELS[3].price,
          image: MODELS[3].image,
          size: "M",
          quantity: 1,
        },
      ];

      // Replace the original bundle item with multiple items
      updatedBag = [
        ...shoppingBag.slice(0, index), // Keep items before the selected item
        ...bundleItems, // Insert the bundle items
        ...shoppingBag.slice(index + 1), // Keep items after the selected item
      ];
    } else if (item.label === "Bundle Tote + Hoodie") {
      const bundleItems = [
        {
          model: MODELS[0].label,
          price: MODELS[0].price,
          image: MODELS[0].image,
          size: "M",
          quantity: 1,
        },
        {
          model: MODELS[3].label,
          price: MODELS[3].price,
          image: MODELS[3].image,
          size: "M",
          quantity: 1,
        },
      ];

      // Replace the original bundle item with multiple items
      updatedBag = [
        ...shoppingBag.slice(0, index), // Keep items before the selected item
        ...bundleItems, // Insert the bundle items
        ...shoppingBag.slice(index + 1), // Keep items after the selected item
      ];
    } else if (item.label === "Bundle Tote + Kaos + Hoodie") {
      const bundleItems = [
        {
          model: MODELS[0].label,
          price: MODELS[0].price,
          image: MODELS[0].image,
          size: "M",
          quantity: 1,
        },
        {
          model: MODELS[2].label,
          price: MODELS[2].price,
          image: MODELS[2].image,
          size: "M",
          quantity: 1,
        },
        {
          model: MODELS[3].label,
          price: MODELS[3].price,
          image: MODELS[3].image,
          size: "M",
          quantity: 1,
        },
      ];

      // Replace the original bundle item with multiple items
      updatedBag = [
        ...shoppingBag.slice(0, index), // Keep items before the selected item
        ...bundleItems, // Insert the bundle items
        ...shoppingBag.slice(index + 1), // Keep items after the selected item
      ];
    } else {
      updatedBag = shoppingBag.map((bag, idx) =>
        idx !== index
          ? bag
          : { ...bag, model: item.label, price: item.price, image: item.image }
      );
      setSelectedItem(item);
    }
    setShoppingBag(updatedBag);
  };

  // Field change handler for form inputs
  const handleFieldChange = (field: string, value: string | boolean) => {
    switch (field) {
      case "firstName":
        setFirstName(value as string);
        break;
      case "lastName":
        setLastName(value as string);
        break;
      case "email":
        setEmail(value as string);
        break;
      case "phoneNumber":
        setPhoneNumber(value as string);
        break;
      case "pickupLocation":
        setPickupLocation(value as string);
        break;
      case "promoCode":
        setPromoCode(value as string);
        break;
      case "paymentClicked":
        setPaymentClicked(value as boolean);
        break;
      default:
        break;
    }
  };

  // Updated page navigation with validations and pending updates
  const handleNextPage = () => {
    if (page === "checkout") {
      // Validate that shopping bag has items
      if (getTotalPrice() <= 0) {
        setPopUpMessage("Please add items to your shopping bag.");
        setPopUpOpen(true);
        return;
      }
      // Validate required customer fields
      if (
        !firstName.trim() ||
        !lastName.trim() ||
        !email.trim() ||
        !phoneNumber.trim() ||
        !pickupLocation.trim()
      ) {
        setPopUpMessage("Please fill out all required fields.");
        setPopUpOpen(true);
        return;
      }
      // Validate that for each bag item with a positive quantity, size and model are chosen
      const incompleteItem = shoppingBag.find(
        (bag) => bag.quantity > 0 && (!bag.size || !bag.model)
      );
      if (incompleteItem) {
        setPopUpMessage(
          "Please select a size and item for all products in your shopping bag."
        );
        setPopUpOpen(true);
        return;
      }
      setPage("review");
    } else if (page === "review") {
      // Check stock availability before transitioning to payment
      checkAvailability(false).then((available) => {
        if (available) {
          // Update each merchandise item by adding pending
          axios
            .get(`${SERVER}/order/merchandise`)
            .then((res) => {
              const updateCalls = shoppingBag.map((bag) => {
                const id = bag.model + " " + bag.size;
                const merchandise = res.data.data.find(
                  (item: any) =>
                    item.model === bag.model && item.size === bag.size
                );
                const data = {
                  pending: merchandise.pending + bag.quantity,
                  bought: merchandise.bought,
                };
                return axios.put(`${SERVER}/order/merchandise/${id}`, data);
              });
              Promise.all(updateCalls)
                .then(() => setPage("payment"))
                .catch((err) => {
                  alert(
                    "Error occurred during payment transition: " + err.message
                  );
                  setPage("review");
                });
            })
            .catch((err) => {
              alert("Error fetching merchandise: " + err.message);
              setPage("review");
            });
        }
      });
    } else if (page === "payment") {
      if (!paymentClicked) {
        setPopUpMessage(
          "Please complete payment before submitting your order."
        );
        setPopUpOpen(true);
        return;
      }
      // Check stock availability and update merchandise:
      // For each bag item, reduce pending and increase bought
      checkAvailability(true).then((available) => {
        if (available) {
          axios
            .get(`${SERVER}/order/merchandise`)
            .then((res) => {
              const updateCalls = shoppingBag.map((bag) => {
                const id = bag.model + " " + bag.size;
                const merchandise = res.data.data.find(
                  (item: any) =>
                    item.model === bag.model && item.size === bag.size
                );
                const data = {
                  pending: merchandise.pending - bag.quantity,
                  bought: merchandise.bought + bag.quantity,
                };
                return axios.put(`${SERVER}/order/merchandise/${id}`, data);
              });
              Promise.all(updateCalls)
                .then(() => setPage("confirmation"))
                .catch((err) => {
                  alert(
                    "Error occurred during final submission: " + err.message
                  );
                  setPage("payment");
                });
            })
            .catch((err) => {
              alert("Error fetching merchandise: " + err.message);
              setPage("payment");
            });
        } else {
          setPopUpMessage(
            "Stock issue detected. If you have paid, please contact us for a refund."
          );
          setPopUpOpen(true);
        }
      });
    }
  };

  // Recalculate final price when entering the payment page
  useEffect(() => {
    if (page === "payment") {
      const totalPrice = getTotalPrice();
      // In this example, discount is not applied so the subtotal equals total price.
      setFinalPrice(totalPrice);
    }
  }, [page, shoppingBag, getTotalPrice]);

  return (
    <div>
      <PopUpMessage
        open={popUpOpen}
        handleClose={() => setPopUpOpen(false)}
        message={popUpMessage}
      />
      <div className="flex flex-col lg:flex-row min-h-screen pt-navbar py-20 ml-[5%]">
        {page !== "confirmation" && (
          <ShoppingBagSidebar shoppingBag={shoppingBag} />
        )}

        <div
          className={`lg:order-2 ml-[2%] flex-auto ${
            page === "confirmation" ? "w-3/4" : "w-full"
          }`}
        >
          <div className="Checkout-details pl-[6.3%] w-[100%] pr-[12%]">
            <div className="checkout-outer mb-[50px]">
              <div className="checkout-label flex justify-between items-center">
                <h2>
                  {page === "review"
                    ? "Review Order"
                    : page === "payment"
                    ? "Payment Details"
                    : page === "confirmation"
                    ? "Thank you for your purchase!"
                    : "Order"}
                </h2>
                {page === "review" && (
                  <button onClick={() => setPage("checkout")}>Edit</button>
                )}
              </div>
              <div className="checkout-information"></div>
            </div>
            {(page === "checkout" || page === "review") && (
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
                  readOnly={page === "review"}
                />
                <ShoppingBagList
                  page={page}
                  shoppingBag={shoppingBag}
                  handleQuantityChange={handleQuantityChange}
                  handleAddItem={handleAddItem}
                  handleRemoveItem={handleRemoveItem}
                  handleSizeChange={handleSizeChange}
                  handleChooseItem={handleChooseItem}
                  readOnly={page === "review"}
                />
                <TotalsDisplay
                  totalPrice={getTotalPrice()}
                  discount={0}
                  isDiscountActive={false}
                />
              </>
            )}
            {page === "payment" && (
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
                        setPromoCode("");
                        return;
                      }
                      const data = { promoCode, pending: true };
                      axios
                        .put(`${SERVER}/order/promocode`, data)
                        .then(() => {
                          setIsPromoCodeInvalid(false);
                          setIsPromoCodeApplied(true);
                          // Keep finalPrice as already calculated
                          setFinalPrice(finalPrice);
                        })
                        .catch((err) => {
                          alert("An error occurred: " + err.message);
                        });
                    })
                    .catch((err) => {
                      alert("An error occurred: " + err.message);
                    });
                }}
                openExternalLink={openExternalLink}
              />
            )}
            {page === "confirmation" && <ConfirmationPage />}
            {page === "confirmation" ? (
              <></>
            ) : page !== "payment" ? (
              <button
                className="bg-[#D07D14] w-full rounded-md text-white py-1.5 text-lg mt-7 disabled:bg-gray-400 hidden lg:block"
                onClick={handleNextPage}
                disabled={getTotalPrice() <= 0}
              >
                Next
              </button>
            ) : (
              <button
                className="block bg-[#D07D14] w-full rounded-md text-white py-1.5 text-lg mt-7 disabled:bg-gray-400"
                onClick={() => {
                  setSubmitOrderClicked(true);
                  handleNextPage();
                }}
                disabled={
                  getTotalPrice() <= 0 || !paymentClicked || submitOrderClicked
                }
              >
                Submit Order
              </button>
            )}
          </div>
        </div>
        {page !== "confirmation" && page !== "payment" && (
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

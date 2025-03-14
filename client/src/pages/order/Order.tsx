// Order.tsx
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { openExternalLink } from "../../shared/utils/OpenLinkUtil";
import { PopUpMessage } from "../../shared/components/PopUpMessage";
import {
  SIZES,
  MODELS,
  DEFAULT_SHOPPING_BAG,
  SHOPPING_BAG_TYPE,
  BUNDLE_OPTIONS,
  DEFAULT_BUNDLE_BAG,
  NO_NEED_SIZE,
  LOCATIONS,
} from "./data/data";
import { ShoppingBagSidebar } from "./components/ShoppingBagSidebar";
import { CheckoutForm } from "./components/CheckoutForm";
import { ShoppingBagList } from "./components/ShoppingBagList";
import { PaymentSection } from "./components/PaymentSection";
import { ConfirmationPage } from "./components/ConfirmationPage";
import { TotalsDisplay } from "./components/TotalsDisplay";

const SERVER = process.env.REACT_APP_SERVER;

interface DataOrder {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  pickUpLocation?: string;
  items: any[];
  totalPrice: number;
  promoCode?: string;
}

export const Order = () => {
  const [page, setPage] = useState<
    "checkout" | "review" | "payment" | "confirmation"
  >("checkout");
  const [shoppingBag, setShoppingBag] = useState<SHOPPING_BAG_TYPE[]>([
    DEFAULT_SHOPPING_BAG,
  ]);
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
  const [nextPageClicked, setNextPageClicked] = useState(false);

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
          // Sum quantities for items matching model and size,
          // including both main items and bundle items.
          const total = shoppingBag.reduce((acc, bag) => {
            let count = 0;
            // Check main bag item.
            if (bag.model === item.model && bag.size === item.size) {
              count += bag.quantity;
            }
            // Check bundle items. We assume each bundle item counts as one unit per bag quantity.
            if (bag.isBundle) {
              bag.bundle.forEach((bundleItem) => {
                if (
                  bundleItem.model === item.model &&
                  bundleItem.size === item.size
                ) {
                  count += bag.quantity;
                }
              });
            }
            return acc + count;
          }, 0);

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

  const handleSubmitOrder = () => {
    axios
      .get(`${SERVER}/order/merchandise`)
      .then((res) => {
        // Collect all update promises in an array.
        const updatePromises: any[] = [];

        // Iterate over each shopping bag item.
        shoppingBag.forEach((bag) => {
          if (bag.isBundle) {
            // For bundle items, loop over each bundled product.
            bag.bundle.forEach((bundle) => {
              let id;
              if (
                bundle.model === "Jauh di Mata Tote Bag" ||
                bundle.model === "Life in Van City Tote Bag"
              ) {
                id = bundle.model + " none";
              } else {
                id = bundle.model + " " + bundle.size;
              }
              const merchandise = res.data.data.find(
                (item: any) =>
                  item.model === bundle.model &&
                  (item.size === bundle.size ||
                    bundle.model === "Jauh di Mata Tote Bag" ||
                    bundle.model === "Life in Van City Tote Bag")
              );
              const data = {
                pending: merchandise.pending - 1,
                bought: merchandise.bought + 1,
              };
              updatePromises.push(
                axios.put(`${SERVER}/order/merchandise/${id}`, data)
              );
            });
          } else {
            // For non-bundle items.
            const id = bag.model + " " + bag.size;
            const merchandise = res.data.data.find(
              (item: any) =>
                item.model === bag.model &&
                (item.size === bag.size ||
                  bag.model === "Jauh di Mata Tote Bag" ||
                  bag.model === "Life in Van City Tote Bag")
            );
            const data = {
              pending: merchandise.pending - bag.quantity,
              bought: merchandise.bought + bag.quantity,
            };
            updatePromises.push(
              axios.put(`${SERVER}/order/merchandise/${id}`, data)
            );
          }
        });

        // Wait for all merchandise updates to complete.
        Promise.all(updatePromises)
          .then(() => {
            // Build the final items array.
            let newBags = [];
            for (let bag of shoppingBag) {
              // Push the main item.
              const mainItem = {
                quantity: bag.quantity,
                size: bag.size,
                model: bag.model,
                price: bag.price,
                image: bag.image,
              };
              newBags.push(mainItem);
              // If this bag is a bundle, push each bundled item.
              if (bag.isBundle && bag.bundle && bag.bundle.length > 0) {
                for (let bundle of bag.bundle) {
                  let size = bundle.size;
                  if (
                    bundle.model === "Jauh di Mata Tote Bag" ||
                    bundle.model === "Life in Van City Tote Bag"
                  ) {
                    size = "none";
                  }
                  const bundleItem = {
                    quantity: 1,
                    size: size,
                    model: bundle.model,
                    price: 0, // Adjust if necessary.
                    image: "", // Optionally, look up the image from your MODELS list.
                  };
                  newBags.push(bundleItem);
                }
              }
            }
            console.log(newBags);

            // Lookup the pickup location.
            const location = LOCATIONS.find(
              (loc) => loc.value === pickupLocation
            );

            // Build the order data.
            let dataOrder: DataOrder = {
              firstName,
              lastName,
              emailAddress: email,
              phoneNumber,
              pickUpLocation: location?.label,
              items: newBags,
              totalPrice: finalPrice,
            };

            if (isPromoCodeApplied) {
              dataOrder = { ...dataOrder, promoCode: promoCode };
            }

            // Create the order once.
            axios
              .post(`${SERVER}/order`, dataOrder)
              .then(() => {
                setPage("confirmation");
              })
              .catch((err) => {
                alert("An error happened: " + err.message);
                setPage("payment");
              });
          })
          .catch((err) => {
            alert("An error happened: " + err.message);
            setPage("payment");
          });
      })
      .catch((err) => {
        alert("An error happened: " + err.message);
        setPage("payment");
      });
  };

  // Handlers for shopping bag operations
  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedBag = [...shoppingBag];
    updatedBag[index].quantity = newQuantity;
    setShoppingBag(updatedBag);
  };

  const handleAddItem = () => {
    const newItem = { ...DEFAULT_SHOPPING_BAG };
    setShoppingBag([...shoppingBag, newItem]);
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
    const updatedBag = shoppingBag.map((bag, idx) => {
      if (idx !== index) return bag;

      let bundle: (typeof DEFAULT_BUNDLE_BAG)[] = [];

      if (item.isBundle) {
        const len =
          BUNDLE_OPTIONS.find((bundle) => bundle.bundle === item.value)?.options
            .length || 0;
        for (let i = 0; i < len; i++) {
          bundle.push({ ...DEFAULT_BUNDLE_BAG });
        }
      }

      let size = bag.size;

      if (NO_NEED_SIZE.includes(item.value)) size = "none";

      return {
        ...bag,
        model: item.label,
        price: item.price,
        image: item.image,
        isBundle: item.isBundle,
        bundleIdx: item.value,
        bundle: bundle,
        size: size,
      };
    });
    setShoppingBag(updatedBag);
    console.log(updatedBag);
  };

  const handleBundleSizeChange = (
    index: number,
    bundleIndex: number,
    size: (typeof SIZES)[number]
  ) => {
    if (page !== "checkout") return;
    const updatedBag = shoppingBag.map((bag, idx) => {
      if (idx !== index) return bag;

      const bundle = bag.bundle.map((item, i) =>
        i !== bundleIndex ? item : { ...item, size: size.label }
      );

      return { ...bag, bundle: bundle };
    });
    setShoppingBag(updatedBag);
  };

  const handleBundleModelChange = (
    index: number,
    bundleIndex: number,
    model: (typeof MODELS)[number]
  ) => {
    if (page !== "checkout") return;
    const updatedBag = shoppingBag.map((bag, idx) => {
      if (idx !== index) return bag;

      const bundle = bag.bundle.map((item, i) =>
        i !== bundleIndex ? item : { ...item, model: model.label }
      );

      return { ...bag, bundle: bundle };
    });
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
          axios.get(`${SERVER}/order/merchandise`).then((res) => {
            for (let bag of shoppingBag) {
              if (bag.isBundle) {
                for (let bundle of bag.bundle) {
                  let id;
                  if (
                    bundle.model === "Jauh di Mata Tote Bag" ||
                    bundle.model === "Life in Van City Tote Bag"
                  ) {
                    id = bundle.model + " none";
                  } else {
                    id = bundle.model + " " + bundle.size;
                  }
                  const merchandise = res.data.data.find(
                    (item: any) =>
                      item.model === bundle.model &&
                      (item.size === bundle.size ||
                        bundle.model === "Jauh di Mata Tote Bag" ||
                        bundle.model === "Life in Van City Tote Bag")
                  );
                  const data = {
                    pending: merchandise.pending + 1,
                    bought: merchandise.bought,
                  };
                  axios
                    .put(`${SERVER}/order/merchandise/${id}`, data)
                    .then(() => {
                      setPage("payment");
                    })
                    .catch((err) => {
                      alert(
                        "Error occured: " + err.message + ". Please try again!"
                      );
                      setNextPageClicked(false);
                      setPage('review');
                    });
                }
              } else {
                const id = bag.model + " " + bag.size;
                const merchandise = res.data.data.find(
                  (item: any) =>
                    item.model === bag.model &&
                    (item.size === bag.size ||
                      bag.model === "Jauh di Mata Tote Bag" ||
                      bag.model === "Life in Van City Tote Bag")
                );
                const data = {
                  pending: merchandise.pending + bag.quantity,
                  bought: merchandise.bought,
                };
                console.log(id);
                axios
                  .put(`${SERVER}/order/merchandise/${id}`, data)
                  .then(() => {
                    setPage("payment");
                  })
                  .catch((err) => {
                    alert(
                      "Error occured: " + err.message + ". Please try again!"
                    );
                    setNextPageClicked(false);
                    setPage('review');
                  });
              }
            }
          });
        } else {
          setNextPageClicked(false);
        }
      });
    } else if (page === "payment") {
      // Check if the file is uploaded
      if (paymentClicked) {
        // If the file is uploaded, proceed to the confirmation page
        checkAvailability(true).then((available) => {
          if (available) {
            handleSubmitOrder();
          } else {
            setPopUpMessage(
              "If you have paid, please contact us at our instagram to process the refund. Sorry for the inconvenience."
            );
            setPopUpOpen(true);
          }
        });
      } else {
        // If the file is not uploaded, proceed to the payment page
        setPage("payment");
      }
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
                  handleBundleSizeChange={handleBundleSizeChange}
                  handleBundleModelChange={handleBundleModelChange}
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
                onClick={() => {
                  if (page === "review") setNextPageClicked(true);
                  handleNextPage();
                }}
                disabled={getTotalPrice() <= 0 || nextPageClicked}
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

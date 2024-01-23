import { ShoppingBag } from "./components/ShoppingBag";
import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

const locations = [
  {
    value: "1",
    label: "Lougheed Skytrain Station",
  },
  {
    value: "2",
    label: "UBC",
  },
  {
    value: "3",
    label: "SFU",
  },
  {
    value: "4",
    label: "Marine Drive",
  },
  {
    value: "5",
    label: "Joyce Collingwood",
  },
];

const sizes = [
  {
    value: "1",
    label: "S",
  },
  {
    value: "2",
    label: "M",
  },
  {
    value: "3",
    label: "L",
  },
  {
    value: "4",
    label: "XL",
  },
  {
    value: "5",
    label: "XXL",
  },
];

const items = [
  {
    value: "1",
    label: "Option 1",
    price: 30,
  },
  {
    value: "2",
    label: "Option 2",
    price: 30,
  },
  {
    value: "3",
    label: "Option 3",
    price: 10,
  },
];

const DEFAULT_SHOPPING_BAG = {
  quantity: 0,
  size: "",
  item: "",
  price: 0,
};

const DEFAULT_SELECTED_ITEM = {
  value: "",
  label: "",
  price: 0,
};

export const Order = () => {
  const [page, setPage] = useState<"checkout" | "review" | "payment">("checkout");
  const [shoppingBag, setShoppingBag] = useState([DEFAULT_SHOPPING_BAG]);
  const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECTED_ITEM);
  const [numItems, setNumItems] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedShoppingBag = [...shoppingBag];
    updatedShoppingBag[index].quantity = newQuantity;
    setShoppingBag(updatedShoppingBag);

    // Recalculate total number of items
    const totalQuantity = updatedShoppingBag.reduce((total, item) => total + item.quantity, 0);
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

  const totalPrice = shoppingBag.reduce((total, item) => total + item.price * item.quantity, 0);
  const taxRate = 0.12;
  const tax = totalPrice * taxRate;
  const subtotal = totalPrice + tax;

  const isTotalsVisible = shoppingBag.some((item) => item.quantity > 0 && item.size && item.item);

  const handleChooseItem = (index: number, item: (typeof items)[number]) => {
    if (page !== "checkout") return;
    setShoppingBag((prev) => {
      return prev.map((bag, idx) =>
        idx !== index ? bag : { ...bag, item: item.label, price: item.price }
      );
    });
  };

  const handleNextPage = () => {
    setPage((page) => {
      if (page === "checkout") {
        if (getTotalPrice() <= 0) return "checkout";
        return "review";
      }
      if (page === "review") return "payment";
      return "payment";
    });
  };

  return (
    <div className="h-screen flex pt-[7%] pl-[6.3%]">
      <ShoppingBag />
      <div className="Checkout-details pl-[6.3%] w-[62%] pr-[12%]">
        <div className="Checkout">
          <div className="checkout-outer mb-[50px]">
            <div className="checkout-label">
              <h1>Checkout</h1>
            </div>
            <div className="checkout-information"></div>
          </div>
          <form className="checkout-form">
            <div className="name flex justify-between gap-5">
              <TextField
                className="flex-auto"
                id="outlined-multiline-flexible"
                label="First Name*"
                multiline
                maxRows={4}
                disabled={page !== "checkout"}
              />
              <TextField
                className="flex-auto"
                id="outlined-multiline-flexible"
                label="Last Name*"
                multiline
                maxRows={4}
                disabled={page !== "checkout"}
              />
            </div>
            <div className="pt-[3%]">
              <TextField
                id="outlined-multiline-flexible"
                label="Email Adress*"
                multiline
                maxRows={4}
                fullWidth
                disabled={page !== "checkout"}
              />
            </div>
            <div className="phone-number flex justify-between pt-[3%] gap-5">
              <TextField
                className="w-[10%] flex justify-center items-center"
                disabled
                id="outlined-disabled"
                defaultValue="  +1"
              />  
              <TextField
                className="flex-auto"
                id="outlined-multiline-flexible"
                label="Phone Number*"
                multiline
                maxRows={4}
                disabled={page !== "checkout"}
              />
            </div>

            <form className="pickup-location pt-[3%]">
              <TextField
                id="outlined-multiline-location"
                select
                label="Pick-Up Location*"
                fullWidth
                disabled={page !== "checkout"}
              >
                {locations.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </form>
          </form>
        </div>

        {/* Shopping Bag */}
        <div className="Shopping-bag mt-10">
          <div className="shopping flex justify-between mb-3">
            <h1 className="text-4xl">Shopping Bag</h1>
            <button
              onClick={handleAddItem}
              className="add-button pr-[2%]"
              disabled={page !== "checkout"}
            >
              Add
            </button>
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
                  if (page !== "checkout") return;
                  const newQuantity = parseInt(event.target.value, 10) || 0;
                  handleQuantityChange(index, newQuantity);
                }}
                disabled={page !== "checkout"}
              />
              <div className="x">X</div>
              <div className="justify-between flex w-[80%]">
                <div className="w-[27%]">
                  <TextField
                    className="w-full"
                    id="outlined-multiline-sizes"
                    select
                    label="Size*"
                    defaultValue={bag.size}
                    disabled={page !== "checkout"}
                  >
                    {sizes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
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
                    defaultValue={bag.item}
                    onChange={(event) => {
                      const selectedItemValue = event.target.value;
                      const selected =
                        items.find((item) => item.value === selectedItemValue) ||
                        DEFAULT_SELECTED_ITEM;
                      setSelectedItem(selected);
                    }}
                    disabled={page !== "checkout"}
                  >
                    {items.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        onClick={() => handleChooseItem(index, option)}
                        disabled={page !== "checkout"}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="remove-button pr-[2%]"
                  disabled={page !== "checkout"}
                >
                  X
                </button>
              </div>
            </div>
          ))}
          {getTotalPrice() > 0 && (
            <div className="">
              <div className="totals font-light">
                <div className="text-[#9A9A9A] flex justify-between">
                  Merchandise Total <span className="">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="text-[#9A9A9A] flex justify-between">
                  Tax (12%) <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2.5 text-2xl">
                  Subtotal <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
          {!isTotalsVisible && shoppingBag.length === 0 && <div>kosong</div>}
          <button
            className="bg-[#D07D14] w-full rounded-md text-white py-1.5 text-lg mt-7 disabled:bg-gray-400"
            onClick={() => handleNextPage()}
            disabled={getTotalPrice() <= 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

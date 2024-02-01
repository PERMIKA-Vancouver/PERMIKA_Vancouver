import axios from 'axios';
import { useEffect, useState } from 'react';

const SERVER = process.env.REACT_APP_SERVER;

interface OrderType {
  firstName: String;
  lastName: String;
  emailAddress: String;
  phoneNumber: Number;
  pickUpLocation: String;
  items: [String];
  totalPrice: Number;
}

interface ItemType {
  quantity: number;
  size: String;
  model: String;
}

export const Orders = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    axios.get(`${SERVER}/order`).then((res) => {
      setOrders(res.data.data);
    });
  }, []);

  return (
    <div className="pt-navbar ml-10 mr-10">
      {orders.map((order: OrderType, index) => (
        <div className="mb-12">
          <p>{`Order ${index + 1}`}</p>
          <p>{`Name: ${order.firstName} ${order.lastName}`}</p>
          <p>{`Email: ${order.emailAddress}`}</p>
          <p>{`Phone: ${order.phoneNumber.toString()}`}</p>
          <p>{`Pick-up: ${order.pickUpLocation}`}</p>
          <p>{`Total: $${order.totalPrice.toString()}`}</p>
          <div>
            <p>Items:</p>
            {order.items.map((item, index) => (
              <div className="ml-4">
                <p>{`${index + 1}.`}</p>
                <Item itemId={item} />
              </div>
            ))}
          </div>
          <hr className="border-2 border-black" />
        </div>
      ))}
    </div>
  );
};

const Item = ({ itemId }: { itemId: String }) => {
  const [item, setItem] = useState<ItemType>();

  useEffect(() => {
    axios.get(`${SERVER}/order/item/${itemId}`).then((res) => {
      setItem(res.data.data);
    });
  });

  return (
    <div className="mb-4">
      <p>{`Model: ${item?.model}`}</p>
      <p>{`Size: ${item?.size}`}</p>
      <p>{`Quantity: ${item?.quantity}`}</p>
    </div>
  );
};

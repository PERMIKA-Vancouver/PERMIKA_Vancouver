import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';

import { getErrorMessage } from '../../helper/ErrorMessage';
import { ItemType, Items } from '../../models/merchandise/itemsModel';
import { Order } from '../../models/merchandise/orderModel';

export const createOrderController = async (req: Request, res: Response) => {
  try {
    if (checkOrderRequestBody(req)) {
      return res
        .status(400)
        .send({ message: 'Order: Send all required fields' });
    }

    let items: any[] = [];
    req.body.items.map((item: ItemType) => {
      if (!item.quantity || !item.size || !item.model) {
        return res
          .status(400)
          .send({ message: 'Item: Send all required fields' });
      }

      const newItem = {
        quantity: item.quantity,
        size: item.size,
        model: item.model,
      };

      items.push(Items.create(newItem));
    });

    items = await Promise.all(items);

    let itemsId: ObjectId[] = [];
    items.map((item) => {
      itemsId.push(item._id);
    });

    const newOrder = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      pickUpLocation: req.body.pickUpLocation,
      items: itemsId,
      promoCode: req.body.promoCode,
      totalPrice: req.body.totalPrice,
      payment: req.body.payment,
    };

    const order = await Order.create(newOrder);

    return res.status(201).send(order);
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

const checkOrderRequestBody = (req: Request): boolean => {
  return (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.emailAddress ||
    !req.body.phoneNumber ||
    !req.body.pickUpLocation ||
    !req.body.items ||
    req.body.items.length === 0 ||
    !req.body.totalPrice ||
    !req.body.payment
  );
};

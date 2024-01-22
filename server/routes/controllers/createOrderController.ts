import { Request, Response } from 'express';
import { ItemType, Items, Order } from '../../models/orderModel';
import { ObjectId } from 'mongodb';

export const createOrderController = async (req: Request, res: Response) => {
  try {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.emailAddress ||
      !req.body.phoneNumber ||
      !req.body.pickUpLocation ||
      !req.body.items ||
      req.body.items.isEmpty
    ) {
      return res.status(400).send({ message: 'Send all required fields' });
    }

    let items: any[] = [];
    req.body.items.map((item: ItemType) => {
      if (!item.quantity || !item.size || !item.model) {
        return res.status(400).send({ message: 'Send all required fields' });
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
    };

    const order = await Order.create(newOrder);

    return res.status(201).send(order);
  } catch (err) {
    let errorMsg: string = '';

    if (typeof err === 'string') {
      errorMsg = err;
    } else if (err instanceof Error) {
      errorMsg = err.message;
    }

    console.log(errorMsg);
    return res.status(500).send({ message: errorMsg });
  }
};

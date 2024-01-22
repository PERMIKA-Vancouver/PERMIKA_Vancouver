import { Request, Response } from 'express';
import { Order } from '../../models/orderModel';

export const createOrderController = async (req: Request, res: Response) => {
  try {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.emailAddress ||
      !req.body.phoneNumber ||
      !req.body.pickUpLocation
    ) {
      return res.status(400).send({ message: 'Send all required fields' });
    }

    const newOrder = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      pickUpLocation: req.body.pickUpLocation,
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

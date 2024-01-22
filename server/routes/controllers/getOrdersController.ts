import { Request, Response } from 'express';
import { Order } from '../../models/orderModel';

export const getOrdersController = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json({ count: orders.length, data: orders });
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

import { Request, Response } from 'express';
import { Merchandise } from '../../models/merchandise/merchandiseModel';

export const getMerchandisesController = async (
  req: Request,
  res: Response
) => {
  try {
    const merchandises = await Merchandise.find({});
    return res
      .status(200)
      .json({ count: merchandises.length, data: merchandises });
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

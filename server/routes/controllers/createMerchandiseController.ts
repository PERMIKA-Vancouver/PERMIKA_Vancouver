import { Request, Response } from 'express';

import { getErrorMessage } from '../../helper/ErrorMessage';
import { Merchandise } from '../../models/merchandise/merchandiseModel';

export const createMerchandiseController = async (
  req: Request,
  res: Response
) => {
  try {
    if (checkMerchandiseReqBody(req)) {
      return res.status(400).send({ message: 'Send all required fields' });
    }

    const newMerchandise = {
      _id: `${req.body.model} ${req.body.size}`,
      model: req.body.model,
      size: req.body.size,
      stock: req.body.stock,
      price: req.body.price,
      bought: 0,
      pending: 0,
    };

    const merchandise = await Merchandise.create(newMerchandise);

    return res.status(201).send(merchandise);
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

const checkMerchandiseReqBody = (req: Request): boolean => {
  return (
    !req.body.model || !req.body.size || !req.body.stock || !req.body.price
  );
};

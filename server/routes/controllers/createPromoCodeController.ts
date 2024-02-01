import { Request, Response } from 'express';

import { getErrorMessage } from '../../helper/ErrorMessage';
import { PromoCode } from '../../models/merchandise/promoCodeModel';

export const createPromoCodeController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.body.promoCode) {
      return res.status(400).send({ message: 'Send all required fields' });
    }

    const newPromoCode = {
      _id: req.body.promoCode,
      promoCode: req.body.promoCode,
    };

    const promoCode = await PromoCode.create(newPromoCode);

    return res.status(201).send(promoCode);
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

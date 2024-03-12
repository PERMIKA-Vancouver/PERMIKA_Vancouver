import { Request, Response } from 'express';

import { getErrorMessage } from '../../helper/ErrorMessage';
import { PromoCode } from '../../models/merchandise/promoCodeModel';

export const updatePromoCodeController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.body.promoCode) {
      return res.status(400).send({ message: 'Send all required fields' });
    }

    const id = req.body.promoCode;

    const result = await PromoCode.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({ message: 'Promocode not found' });
    }

    return res
      .status(200)
      .send({ message: `Promocode ${req.body.promoCode} updated!` });
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

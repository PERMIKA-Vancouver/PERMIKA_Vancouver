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

    const updatedPromoCode = {
      claimed: true,
    };

    const result = await PromoCode.findByIdAndUpdate(
      req.body.promoCode,
      updatedPromoCode
    );

    if (!result) {
      return res.status(404).send({ message: 'Promocode not found' });
    }

    return res
      .status(200)
      .send({ message: `Promocode ${req.body.promoCode} applied!` });
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

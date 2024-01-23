import { Request, Response } from 'express';

import { getErrorMessage } from '../../helper/ErrorMessage';
import { PromoCode } from '../../models/merchandise/promoCodeModel';

export const getPromoCodeController = async (req: Request, res: Response) => {
  try {
    if (!req.body.promoCode) {
      return res.status(400).send({ message: 'Send all required fields' });
    }

    const id = req.body.promoCode;

    const promoCode = await PromoCode.findById(id);

    return res.status(200).send(promoCode);
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

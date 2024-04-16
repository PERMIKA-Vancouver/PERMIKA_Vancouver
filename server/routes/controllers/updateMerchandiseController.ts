import { Request, Response } from 'express';

import { getErrorMessage } from '../../helper/ErrorMessage';
import { Merchandise } from '../../models/merchandise/merchandiseModel';

export const updateMerchandiseController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const result = await Merchandise.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({ message: 'Merchandise not found' });
    }

    return res
      .status(200)
      .send({ message: 'Merchandise successfully updated' });
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

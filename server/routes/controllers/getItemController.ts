import { Request, Response } from 'express';
import { Items } from '../../models/merchandise/itemsModel';

export const getItemController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await Items.findById(id);
    return res.status(200).json({ data: item });
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

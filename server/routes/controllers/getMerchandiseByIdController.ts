import { Request, Response } from "express";

import { getErrorMessage } from "../../helper/ErrorMessage";
import { Merchandise } from "../../models/merchandise/merchandiseModel";

export const getMerchandiseByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const result = await Merchandise.findById(id);

    if (!result) {
      return res.status(404).send({ message: "Merchandise not found" });
    }

    return res.status(200).json({ data: result });
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

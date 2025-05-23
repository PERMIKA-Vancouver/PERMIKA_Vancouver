import { google } from "googleapis";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "../../helper/ErrorMessage";
import { ItemType, Items } from "../../models/merchandise/itemsModel";
import { Order } from "../../models/merchandise/orderModel";
import keys from "../../key.json";

console.log(keys.client_email)

const auth = new google.auth.JWT(
  keys.client_email,
  undefined,
  keys.private_key,
  ["https://www.googleapis.com/auth/spreadsheets"]
);

const sheets = google.sheets({ version: "v4", auth });

// The ID of the Google Sheet to modify

// google sheets id for main page
const SPREADSHEET_ID = "1ENGIEMn-jgCUy8u0zY2yRk738CuuqUmL0Y9TZOwYn9k";

// google sheets id for development
// const SPREADSHEET_ID = "1HCxupubu5_bRDErN7naRR5-uXjSE5VOUO-CwuGGiTg0";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    if (checkOrderRequestBody(req)) {
      return res
        .status(400)
        .send({ message: "Order: Send all required fields" });
    }

    let items: any[] = [];
    req.body.items.map((item: ItemType) => {
      if (!item.quantity || !item.size || !item.model) {
        return res
          .status(400)
          .send({ message: "Item: Send all required fields" });
      }

      const newItem = {
        quantity: item.quantity,
        size: item.size,
        model: item.model,
      };

      items.push(Items.create(newItem));
    });

    items = await Promise.all(items);

    let itemsId: ObjectId[] = [];
    items.map((item) => {
      itemsId.push(item._id);
    });

    let itemsModel: String[] = [];
    items.map((item) => {
      itemsModel.push(item.model);
    });

    let itemsQuantity: String[] = [];
    items.map((item) => {
      itemsQuantity.push(item.quantity);
    });

    const newOrder = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      pickUpLocation: req.body.pickUpLocation,
      items: itemsId,
      promoCode: req.body.promoCode,
      totalPrice: req.body.totalPrice,
      payment: req.body.payment,
    };

    const order = await Order.create(newOrder);

    // Convert items Model array to a comma-separated string
    const itemsModelString = itemsModel
      .map((model) => model.toString())
      .join(", ");

    // Convert items Quan array to a comma-separated string
    const itemsQuanString = itemsQuantity
      .map((quan) => quan.toString())
      .join(", ");

    // Update Google Sheet
    const values = [
      [
        order._id.toString(),
        req.body.firstName,
        req.body.lastName,
        req.body.emailAddress,
        req.body.phoneNumber,
        req.body.pickUpLocation,
        req.body.totalPrice,
        req.body.payment,
        itemsModelString,
        itemsQuanString,
        req.body.promoCode,
        new Date().toISOString(),
      ],
    ];
    const resource = {
      values,
    };

    console.log(
      "Attempting to append values to Google Sheets with ID:",
      SPREADSHEET_ID
    );

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A2", // Change this to the appropriate range in your sheet
      valueInputOption: "RAW",
      requestBody: resource,
    });

    return res.status(201).send(order);
  } catch (err) {
    return res.status(500).send({ message: getErrorMessage(err) });
  }
};

const checkOrderRequestBody = (req: Request): boolean => {
  return (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.emailAddress ||
    !req.body.phoneNumber ||
    !req.body.pickUpLocation ||
    !req.body.items ||
    req.body.items.length === 0 ||
    !req.body.totalPrice
  );
};

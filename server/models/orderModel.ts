import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export interface ItemType {
  quantity: number;
  size: String;
  model: String;
}

const ItemsSchema = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});

const OrderSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    pickUpLocation: {
      type: String,
      required: true,
    },
    items: [
      {
        type: ObjectId,
        ref: 'Items',
      },
    ],
  },
  { timestamps: true }
);

export const Items = mongoose.model('Items', ItemsSchema);
export const Order = mongoose.model('Order', OrderSchema);

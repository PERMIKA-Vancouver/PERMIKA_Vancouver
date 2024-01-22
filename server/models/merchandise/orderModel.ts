import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

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
    promoCode: {
      type: String,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', OrderSchema);

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);

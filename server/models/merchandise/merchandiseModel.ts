import mongoose, { Schema } from 'mongoose';

const MerchandiseSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bought: {
    type: Number,
    defaultValue: 0,
  },
  pending: {
    type: Number,
    defaultValue: 0,
  },
});

export const Merchandise = mongoose.model('Merchandise', MerchandiseSchema);

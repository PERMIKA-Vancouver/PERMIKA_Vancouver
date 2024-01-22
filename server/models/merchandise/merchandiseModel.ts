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
});

export const Merchandise = mongoose.model('Merchandise', MerchandiseSchema);

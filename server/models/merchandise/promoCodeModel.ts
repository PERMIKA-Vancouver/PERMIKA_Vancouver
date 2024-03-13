import mongoose, { Schema } from 'mongoose';

const PromoCodeSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  promoCode: {
    type: String,
    required: true,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
  pending: {
    type: Boolean,
    default: false,
  },
});

export const PromoCode = mongoose.model('PromoCode', PromoCodeSchema);

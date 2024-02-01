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

export const Items = mongoose.model('Items', ItemsSchema);

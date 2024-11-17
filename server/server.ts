import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import orderRoutes from './routes/orderRoute';
import addImagesRouter from './routes/addImages';

dotenv.config();
const MONGODB: string = process.env.MONGODB ?? '';

// express app
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.use('/order', orderRoutes);
app.use('/images', addImagesRouter);

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log('App connected to database');
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
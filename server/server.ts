import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const MONGODB: string = process.env.MONGODB ?? '';

// express app
const app = express();

app.get('/', (req, res) => {
  console.log(req.method, req.path);
  return res.status(234).send('Welcome to PERMIKA!!!!!');
});

// connect to mongodb
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

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// express app
const app = express();

// middleware
// app.use((req, rest, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// routes
// app.use(merchandiseRoutes);

app.get('/', (req, res) => {
  console.log(req.method, req.path);
  return res.status(234).send('Welcone to PERMIKA');
});

// connect to mongodb
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log('App connected to database');
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

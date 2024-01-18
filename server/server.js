import express from 'express';
import dotenv from 'dotenv';

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

// listen for request
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

export * from './createOrderController';
export * from './getOrdersController';
export * from './createPromoCodeController';
export * from './updatePromoCodeController';
export * from './getPromoCodeController';
export * from './createMerchandiseController';

// // Route for Save a new Book
// router.post('/', async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res.status(400).send({ message: 'Send all required fields' });
//     }

//     const newBook = {
//       title: req.body.title,
//       author: req.body.author,
//       publishYear: req.body.publishYear,
//     };

//     const book = await Book.create(newBook);

//     return res.status(201).send(book);
//   } catch (err) {
//     if (typeof err === 'string') {
//       console.log(err);
//     } else if (err instanceof Error) {
//       console.log(err.message);
//     }
//   }
// });

// // Route for Get ALL Books from database
// router.get('/', async (req, res) => {
//   try {
//     const books = await Book.find({});
//     return res.status(200).json({ count: books.length, data: books });
//   } catch (err) {
//     let errorMsg: string = '';

//     if (typeof err === 'string') {
//       errorMsg = err;
//     } else if (err instanceof Error) {
//       errorMsg = err.message;
//     }

//     console.log(errorMsg);
//     return res.status(500).send({ message: errorMsg });
//   }
// });

// // Route for Get One Book from database
// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findById(id);
//     return res.status(200).json(book);
//   } catch (err) {
//     let errorMsg: string = '';

//     if (typeof err === 'string') {
//       errorMsg = err;
//     } else if (err instanceof Error) {
//       errorMsg = err.message;
//     }

//     console.log(errorMsg);
//     return res.status(500).send({ message: errorMsg });
//   }
// });

// // Route for update a book
// router.put('/:id', async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res.status(400).send({ message: 'Send all required fields' });
//     }

//     const { id } = req.params;

//     const result = await Book.findByIdAndUpdate(id, req.body);

//     if (!result) {
//       return res.status(404).send({ message: 'Book not found' });
//     }

//     return res.status(200).send({ message: 'Book successfully updated' });
//   } catch (err) {
//     let errorMsg: string = '';

//     if (typeof err === 'string') {
//       errorMsg = err;
//     } else if (err instanceof Error) {
//       errorMsg = err.message;
//     }

//     console.log(errorMsg);
//     return res.status(500).send({ message: errorMsg });
//   }
// });

// // Route for Delete a book
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await Book.findByIdAndDelete(id);

//     if (!result) {
//       return res.status(404).send({ message: 'Book not found' });
//     }

//     return res.status(200).send({ message: 'Book successfully deleted' });
//   } catch (err) {
//     let errorMsg: string = '';

//     if (typeof err === 'string') {
//       errorMsg = err;
//     } else if (err instanceof Error) {
//       errorMsg = err.message;
//     }

//     console.log(errorMsg);
//     return res.status(500).send({ message: errorMsg });
//   }
// });

// export default router;

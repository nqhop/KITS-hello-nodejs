const express = require('express');
const router = express.Router();

const bookControllers = require('../controllers/book')

// get all books
router.get('/books', bookControllers.getAllBooks);

// get book by id
router.get('/books/:id', bookControllers.getBookById)

// add book
router.get('/books', bookControllers.addBook)


module.exports = router;
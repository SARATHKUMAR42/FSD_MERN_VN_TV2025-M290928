const express = require('express');
const router = express.Router();
const controller = require('../Controllers/bookController');

// POST /books  -> add a new book
router.post('/', controller.addBook);

// GET /books  -> get all books (supports ?genre=xyz)
router.get('/', controller.getAllBooks);

// GET /books/:id -> get book by _id
router.get('/:id', controller.getBookById);

// PUT /books/:id -> update book by _id
router.put('/:id', controller.updateBookById);

// DELETE /books/:id -> delete book by _id
router.delete('/:id', controller.deleteBookById);

module.exports = router;

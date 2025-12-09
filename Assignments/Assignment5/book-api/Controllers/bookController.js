const Book = require('../Models/book');

// Create a new book
const addBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear, genre } = req.body;

    // simple validation
    if (!title || !author || !publishedYear || !genre) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBook = await Book.create({ title, author, publishedYear, genre });
    res.status(201).json({ message: 'Book added', data: newBook });
  } catch (error) {
    next(error);
  }
};

// Get all books (supports ?genre=abc and sorts by publishedYear)
const getAllBooks = async (req, res, next) => {
  try {
    const { genre } = req.query;
    let filter = {};
    if (genre) filter.genre = genre;

    // sort by publishedYear ascending
    const books = await Book.find(filter).sort({ publishedYear: 1 });
    res.json({ count: books.length, data: books });
  } catch (error) {
    next(error);
  }
};

// Get book by ID
const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ data: book });
  } catch (error) {
    next(error);
  }
};

// Update a book by ID
const updateBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updated = await Book.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book updated', data: updated });
  } catch (error) {
    next(error);
  }
};

// Delete a book by ID
const deleteBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById
};

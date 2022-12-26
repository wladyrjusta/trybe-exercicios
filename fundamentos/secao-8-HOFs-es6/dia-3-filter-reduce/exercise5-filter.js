const books = require('./books');

const OldBooksNames = books
  .filter((book) => (new Date().getFullYear() - book.releaseYear)
  > 60 ? book : null).map((book) => book.name);

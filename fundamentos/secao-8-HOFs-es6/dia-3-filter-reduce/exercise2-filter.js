const books = require('./books');

const booksOver60Years = books
  .filter((book) => (new Date().getFullYear() - book.releaseYear)
  > 60 ? book : null)
  .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);

console.log(booksOver60Years);
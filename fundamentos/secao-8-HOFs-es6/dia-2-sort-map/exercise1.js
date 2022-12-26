const books = require('./books');

const formatedBookNames = (booksList) => {
  const result = booksList.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

  return result;
}

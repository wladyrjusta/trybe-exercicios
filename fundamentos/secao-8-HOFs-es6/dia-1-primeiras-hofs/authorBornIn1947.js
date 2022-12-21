const books = require('./books');

const authorBornIn1947 = (year) => {
  const authorsBook = books.find((book) => book.author.birthYear === year);

  if (!year) {
    throw new Error('Invalid year!');
  }

  return authorsBook.author.name;
}
console.log(authorBornIn1947(1947));
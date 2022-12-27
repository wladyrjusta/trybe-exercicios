const books = require('./books');

const longestNamedBook = (booksList) => {
  const result = booksList
    .reduce((acc, currBook) => currBook.name.length 
    > acc.name.length ? currBook : acc);

  return result;
}
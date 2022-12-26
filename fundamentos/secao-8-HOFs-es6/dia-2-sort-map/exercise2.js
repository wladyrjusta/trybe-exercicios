const books = require('./books');

const formatedAuthorNamesBirth = (booksList) => {
  const result = booksList.map((book) => `${book.author.name} - ${book.author.birthYear}`);
  
  return result;
}

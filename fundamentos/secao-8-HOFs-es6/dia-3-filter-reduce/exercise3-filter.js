const books = require('./books');

const booksByAuthorBirthYear = (birthYear) => {
  const result = books.filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);

  return result;
}

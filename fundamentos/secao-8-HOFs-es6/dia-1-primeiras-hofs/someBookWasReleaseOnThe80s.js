const books = require('./books');

const expectedResult = true;

const someBookWasReleaseOnThe80s = () => {
  const result = books.some((book) => book.releaseYear >= 1980 || book.releaseYear <= 1989);

  return result;
}

console.log(someBookWasReleaseOnThe80s());

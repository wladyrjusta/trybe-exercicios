const books = require('./books');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  const result = books.every((book) => book.author.birthYear > 1900);

  return result;
}

console.log(everyoneWasBornOnSecXX());
const books = require('./books');

const averageAge = (booksList) => {
  const  agesAverage = booksList
    .reduce((acc, currBook) => acc + 
    (currBook.releaseYear - currBook.author.birthYear) , 0) / booksList.length;

  return agesAverage;
}
const books = require('./books');

const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
const getNamedBook = (bookLength) => {
  const bookName = books.find((book) => book.name.length === bookLength);
  
  return bookName;  
}
console.log(getNamedBook(26));
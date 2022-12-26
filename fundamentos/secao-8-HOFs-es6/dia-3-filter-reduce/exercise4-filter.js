const books = require('./books');

const fantasyOrScifictionAuthors = () => {
  const result = books
    .filter((book) => book.genre === 'Ficção Científica' 
    || book.genre === 'Fantasia')
    .map((book) => book.author.name).sort();

  return result;
}
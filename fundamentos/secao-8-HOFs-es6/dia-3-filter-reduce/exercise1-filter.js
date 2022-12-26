const books = require('./books');

const scifiOrFantasyBooks = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

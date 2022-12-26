const books = require('./books');

const nameAge = (booksList) => {
  const result = booksList.map((book) => 
  ({ author: `${book.author.name}`, age: `${(book.releaseYear - book.author.birthYear)}`,  })).sort((authorA, authorB) => authorA.age - authorB.age);

  return result;
}


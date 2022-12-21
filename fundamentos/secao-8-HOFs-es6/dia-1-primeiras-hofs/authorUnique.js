const books = require('./books');

const expectedResult = false;

const authorUnique = () => {
  let isUnique;
  
  books.forEach((book, index) => {
    if (book.author.birthYear === books[index]['author']['birthYear']) {
      isUnique = false;
    } else {
      isUnique = true;
    }
  });

  return isUnique;
}

console.log(authorUnique());
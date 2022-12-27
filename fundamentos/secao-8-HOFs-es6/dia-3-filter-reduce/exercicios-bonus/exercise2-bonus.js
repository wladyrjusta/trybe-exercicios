const books = require('./books');

const reduceNames = (booksList) => {
  const result = booksList
    .reduce((acc, curr, index) => {
      if (index === booksList.length - 1) {
        return `${acc}${curr.author.name}.`;
      }

    return `${acc}${curr.author.name}, `;
  }, '');

  return result;
}
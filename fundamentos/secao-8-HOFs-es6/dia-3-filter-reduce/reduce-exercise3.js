const countries = require('./countries');

const longestName = (countriesList) => {
  const countryLongestName = countriesList
    .reduce((acc, curr) => acc.name.length > 
    curr.name.length ? acc : curr);

  return countryLongestName;
}
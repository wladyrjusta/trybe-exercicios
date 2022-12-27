const countries = require('./countries');

const getTotalArea = (countryList) => {
  const totalCountriesArea = countryList
    .reduce((acc, curr) => acc + curr.area, 0);

  return totalCountriesArea;
};
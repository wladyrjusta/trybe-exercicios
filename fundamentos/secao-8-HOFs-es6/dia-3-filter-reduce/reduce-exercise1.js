const countries = require('./countries');

const getPopulation = (countryList) => {
  const totalPopulation = countryList
  .reduce((acc, curr) => acc + curr.population, 0);
  
  return totalPopulation;
}
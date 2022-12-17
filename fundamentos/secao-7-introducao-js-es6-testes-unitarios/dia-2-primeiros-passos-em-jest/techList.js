const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Vazio!';
  const sortedArrayObject = arrayTechnologies.sort();
  const technologiesList = [];
  for (const index in arrayTechnologies) {
    technologiesList.push({tech: sortedArrayObject[index], name,});
  };
  return technologiesList;
}

module.exports = techList;

const hydrate = (string) => {
  const splitedString = string.split('');
  let glassOfWater = 0;
  
  for (let index in splitedString) {
    const parsedCharacter = parseInt(splitedString[index]);

    if (parsedCharacter) {
      glassOfWater += parsedCharacter;
    };
  };

  let glass = 'copo';

  if (glassOfWater > 1) {
    glass = 'copos';
  };

  return `${glassOfWater} ${glass} de água`;
}


module.exports = hydrate;
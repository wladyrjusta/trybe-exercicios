const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const lettersArray = names.join('').toLowerCase().split('');

const countA = (countriesNamesList) => {
  const counterA = countriesNamesList
    .reduce((acc, currLetter) => currLetter
    === 'a' ? acc += 1 : acc, 0);

  return counterA;  
}


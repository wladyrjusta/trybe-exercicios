const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
  
const flatten = (arraysList) => {
  const flattedArray = arraysList
    .reduce((acc, curr) => 
    acc.concat(curr), []);

  return flattedArray;
}
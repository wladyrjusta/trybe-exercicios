const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

const values = [1.99, 3.49, 14.59]

console.log(sum(...values));
console.log(sum(4, 5, 6));
///**Exercicío-01**///
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);
let sum = 0;
let media;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    sum += numbers[indexNumbers];
 }
console.log(sum);
console.log(media = sum / numbers.length);

if (media > 20) {
    console.log('Maior que 20!');
} else {
    console.log('Valor menor ou igual a 20!');
}







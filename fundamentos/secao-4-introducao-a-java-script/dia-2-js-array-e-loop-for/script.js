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

const valorMax = numbers.reduce(function(maiorNum, menorNum) {
    return maiorNum > menorNum ? maiorNum : menorNum;
});
console.log(valorMax);


const valorMin = numbers.reduce(function(menorNum, maiorNum) {
    return menorNum < maiorNum ? menorNum : maiorNum;
});
console.log(valorMin);

let impares = 0;
let pares = 0;

 for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    if (numbers[indexNumbers] % 2 !== 0) {
        impares += 1;
    } else if (numbers[indexNumbers] % 2 == 0) {
        pares += 1;
    } else {
        console.log('Nenhum número ímpar');
    }
}
console.log('Números ímpares neste Array:' + ' ' + impares);
console.log("Números pares neste Array:" + ' ' + pares);

let newArray = Array.from(Array(26).keys());
console.log(newArray)

for (let indexNewArray = 0; indexNewArray < newArray.length; indexNewArray += 1) {
    console.log(newArray[indexNewArray] / 2);
}

///**Fim**///









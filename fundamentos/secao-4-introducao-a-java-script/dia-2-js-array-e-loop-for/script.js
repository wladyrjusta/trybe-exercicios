///**Exercicío-01**///
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (indexOfNumber =0; indexOfNumber < numbers.length; indexOfNumber += 1) {
    console.log(numbers[indexOfNumber]);
}    
let sum = 0;
let media;
for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    sum += numbers[indexNumbers];
    media = sum / numbers.length;
 }
console.log(sum);
console.log(media);

if (media > 20) {
    console.log('Maior que 20!');
} else {
    console.log('Valor menor ou igual a 20!');
}

let maioNum = numbers[0];
for (indexNumbers = 1; indexNumbers < numbers.length; indexNumbers += 1) {
    if (numbers[indexNumbers] > maioNum) {
        maioNum = numbers[indexNumbers];
    }
}
//////////////////////////////////////////////////////
let menorNum = numbers[0];
for (indexNumbers = 1; indexNumbers < numbers.length; indexNumbers += 1) {
    if (numbers[indexNumbers] > menorNum) {
        menorNum = numbers[indexNumbers];
    }
}
console.log('Menor número deste array é: ' + maioNum);


console.log('Menor número deste array é: ' + menorNum);


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
console.log('Números ímpares neste Array: ' + impares);
console.log("Números pares neste Array: " +  pares);

let newArray = [];
for (index = 1; index <= 25; index += 1) {
    newArray.push(index);
}
console.log(newArray);
let divisao = [];
for (let indexNewArray = 0; indexNewArray < newArray.length; indexNewArray += 1) {
    divisao.push(newArray[indexNewArray] / 2);
}
console.log(divisao);
//**Fim**///









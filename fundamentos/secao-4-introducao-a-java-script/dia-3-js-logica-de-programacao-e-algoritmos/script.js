let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}
console.log(fatorial);
////////////////////////////////////////////////////////////////////////
let word = 'Tryber';
let palavraReservada = '';
for (let index = 0; index < word.length; index += 1) {
    palavraReservada += word[word.length - 1 - index];
}
console.log(palavraReservada);
////////////////////////////////////////////////////////////////////////
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorString = array[0];
let menorString = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorString.length) {
        maiorString = array[index];
    }
}
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorString.length) {
        menorString = array[index];
    }
}
console.log(maiorString);
console.log(menorString);
////////////////////////////////////////////////////////////////////////
let n = 5;
let symbol = '*';
let inputLine = '';
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);
};
////////////////////////////////////////////////////////////////////////
let size = 5;
let simbolo = '*';
let addLinha = '';
for (let index = 0; index <= size; index += 1) {
    console.log(addLinha);
    addLinha = addLinha + simbolo;
};

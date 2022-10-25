//***Exercício 1***//
const myName = 'Wladyr';
const birthCity = 'Itaitinga';
let birthYear = 1989;
console.log('Nome de Usuário:' +  ' ' + myName + '| |' + 'cidade natal:' + ' ' + birthCity + ' ||' + 'ano do nascimento:' + ' ' +  birthYear);

//**Exercício 2**//
let base = 5;
let height = 8;
const area = base * height / 2;
const permeter = base + height;
console.log('Área:' + ' ' + area)
console.log('Perimetro:' + ' ' + permeter);

/**Exercício 3***/
const notaPessoaCandidata = 70;
if (notaPessoaCandidata >= 80) {
    console.log("Parabéns, você foi aprovado(a)!")
} else if (notaPessoaCandidata < 80 || notaPessoaCandidata >= 60) {
    console.log("Você está na nossa lista de espera.")
} else if (notaPessoaCandidata < 60) {
    console.log("Você foi reprovado(a).")
}

//**Exercício 4 ***///

const currentHour = 20;
let message;

if (currentHour >= 22) {
    console.log('Não deveríamos comer nada, é hora de dormir');
} else if (currentHour >= 18 && currentHour < 22) {
    console.log('Rango da noite, vamos jantar :D')
} else if (currentHour >= 14 && currentHour < 18) {
    console.log('Vamos fazer um bolo pro café da tarde?')
} else if (currentHour >= 11 && currentHour <= 14) {
    console.log('Hora do almoço!!!')
} else if (currentHour >= 4 && currentHour <= 11) {
    console.log('Hmmm, cheiro de café recém-passado')
}

///***Exercicio 5***Switch/case////

let statusPessoaCandidata = 55;

switch (statusPessoaCandidata) {
    case 'Aprovada' :
     console.log('Parabéns, você foi aprovado(a)!')
     break;
     case 'Lista' :
        console.log('Você está na nossa lista de espera')
     break;
     case 'reprovada' :
        console.log('Você foi reprovado(a)');   
        break
     default :
     console.log('Informação Incorreta.');
}

/// Exercício 6***///

const a = 25;
const b = 30;

let adicao = a + b;
console.log(adicao);
let subtracao = a - b;
console.log(subtracao);
let multiplicacao = a * b;
console.log(multiplicacao);
let divisao = a / b ;
console.log(divisao);
let modulo = a % b;
console.log(modulo);

 ////*** Exercício 7**/////
const num1 = 25 + 35;
const num2 = 36 + 24;

if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2)
} else {
    console.log("Números iguais");
}

///***Exercício 7**////

let valor;

if (valor >= 1) {
    console.log('positive');
} else if (valor < 0) {
    console.log('negative');
} else {
    console.log('Zero');
}

//**Exercício 8**////

const angulo1 = 30;
const angulo2 = 60;
const angulo3 = -1;

if (angulo1 + angulo2 + angulo3 === 180) {
    console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("ERRO! Use números positivos!")
} else if (angulo1 + angulo2 + angulo3 !== 180) {
    console.log(false);
}

///*Exercício 9***///


let peça = ''.toLowerCase();

switch(peça) {
    case 'rainha' :
        console.log(peça.toLowerCase());
        console.log('Se move na Lateral/Horizontal/Obloquos/ quantas casas desejar')
         break;
     case 'rei' :
            console.log('Se move apenas uma casa/em qualquer direção')
         break;
     case 'bispo' :
        console.log('Se move nas diagonais/Qunatas casas desjar')
        break;
    case 'cavalo' :
        console.log('Se move em L, avançando uma casa em qualquer direção e depois avança duas casas em outra diração formando um angulo de 45° na interseção entre as retas//Também pode avançar primeiro duas casas em qualuqer direção e depois uma casa em outra diração, formando um angulo de 45° na interseção entre as retas')
        break;
    case 'torre' :
        console.log('Se move quantas casas desejar na horizontal ou vertical');
        break;
    case 'peão' :
        console.log('Se move uma casa em qualquer direção')
        break
    default:
        console.log('Essa peça não existe')
}   

///**Exercicío - Aula academia de lógica. Questão 2**///
let num = 150;
let recebedor = 1;

 
for (let indexnum = 2; indexnum <= num; indexnum += 1) {
    if (indexnum % 3 === 0) {
        recebedor = recebedor + 1;
        console.log(true);
    } else if (recebedor == 50) {
    console.log('Temos 50 números divisivéis por 3 no intervalo entre 2 e 150!');
    }
}

//**Exercício  10**/////
const numero1 = 5;
const numero2 = 3;
const numero3 = 5;

if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 ==0) {
    console.log(true);
} else {
        console.log(false);
}

if (numero1 % 3 == 0 || numero2  % 3 == 0 || numero3 % 3 == 0) {
    console.log(true);
} else {
    console.log(false);
}

///**FIM**///


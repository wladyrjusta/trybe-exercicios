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





let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Seja Bem-vinda ' + info.personagem);
  info['recorrente'] = 'sim';
console.log(info);
let infoIndex = 0;
for (let index in info) {
    console.log(index);
}
for (let index in info) {
    console.log(info[index]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };

  for (let index in info) {
    let tioPatinhas;
    let margarida = info[index];
    for (let index2 in info2) {
        tioPatinhas = info2[index];
    }
    console.log(margarida + ' e ' + tioPatinhas);
  }
//////////////////////////////////////////////////////////////
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };
  console.log(leitor);

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[1].titulo); 
  ////////////////////////////////////////////////////////////
 function verficaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
 }
 console.log(verficaPalindrome('arara'));
 console.log(verficaPalindrome('desenvolvimento'));
 /////////////////////////////////////////////////////////////////
 let arrayEx = [2, 3, 6, 7, 10, 1];
 function indiceDoMaior(numeros) {
  let indiceMaior = numeros[0];
  for (let indice in numeros) {
    if(indiceMaior < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}
console.log(indiceDoMaior(arrayEx));
//////////////////////////////////////////////////////////////////
let arrayEx2 = [2, 4, 6, 7, 10, 0, -3];
 function indiceDoMenor(arrayNumeros) {
  let indiceMenor = arrayNumeros[0];
  for (let indice in arrayNumeros) {
    if(indiceMenor > arrayNumeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}
console.log(indiceDoMenor(arrayEx2));
//////////////////////////////////////////////////////////////////
let arrayDeTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function biggestWord(string) {
  let maiorPalavra = string[0];
  for (let indice in string) {
    if (maiorPalavra.length < string[indice].length) {
      maiorPalavra = string[indice];
    }
  } 
  return maiorPalavra;
}
console.log(biggestWord(arrayDeTeste));
//////////////////////////////////////////////////////////////////
let arrayTeste =  [2, 3, 2, 5, 8, 2, 3];
function mostRepetedNumber(arrayNumbers) {
  let repetition = 0;
  let countNumber = 0;
  let indexRepeatedNumber = 0;

  for (let i1 in arrayNumbers) {
    let verifyNumber = arrayNumbers[i1];
    for (let i2 in arrayNumbers) {
      if (verifyNumber === arrayNumbers[i2]) {
        countNumber += 1;
      }
    } 
    if (countNumber > repetition) {
      repetition = countNumber;
      indexRepeatedNumber = i1;
    }
    countNumber = 0;
  }
  return arrayNumbers[indexRepeatedNumber];
}
console.log(mostRepetedNumber(arrayTeste));
//////////////////////////////////////////////////////////////////
function sumAllValues(number) {
  let total = 0;
  for (let index = 1; index <= number; index += 1) {
    total = total + index;
  }
  return total;
}
console.log(sumAllValues(5));
//////////////////////////////////////////////////////////////////
function compareWordEnding(word, end) {
  word = word.split('');
  end = end.split('');
  let control = true;
  for (let index = 0; index < end.length; index += 1) {
   if (word[word.length - end.length + index] != end[index]) {
    control = false;
   } 
  }
  return control;
}
console.log(compareWordEnding('trybe', 'be'))
console.log(compareWordEnding('fernando', 'fer'));
//////////////////////////////////////////////////////////////////

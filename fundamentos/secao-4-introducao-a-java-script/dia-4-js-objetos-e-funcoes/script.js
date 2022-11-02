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
  function verificaPalindromo ()
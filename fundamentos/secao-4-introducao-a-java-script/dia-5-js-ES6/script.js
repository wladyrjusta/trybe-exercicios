    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    let pessoa = {
        nome: 'Henri',
        idade: 20
      }
     pessoa = {
        nome: 'Luna',
        idade: 19
      }
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);
      //////////////////////////////////////////////////////////////////
      const numeroAleatorio = () => Math.random();
      console.log(numeroAleatorio());
      //////////////////////////////////////////////////////////////////
      const hello = nome => `Olá, ${nome}!`;
      let nome = 'Ivan';
      console.log(hello(nome)); 
      //////////////////////////////////////////////////////////////////
      const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
      let sobrenome = 'Pires';
      console.log(nomeCompleto(nome, sobrenome));
      //////////////////////////////////////////////////////////////////
      let speed = 90;
      const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o  limite de velocidade` : `Você está na velocidade permitida`;
      console.log(speedCar(speed));
      //////////////////////////////////////////////////////////////////
     let engineOn = 'desligado';
      const carEngineOnOff = () => (engineOn === 'desligado') ? engineOn = 'ligado' : engineOn = 'desligado';
      console.log(`O motor está ${carEngineOnOff()}`);
      console.log(`O motor está ${carEngineOnOff()}`);
      console.log(`O motor está ${carEngineOnOff()}`);
      //////////////////////////////////////////////////////////////////
      const pi = 3.14;
      const circleArea = (raio) => `Essa é a área do circulo: ` + (pi * raio ** 2);
      console.log(circleArea(3));
      console.log(circleArea(5));
      //////////////////////////////////////////////////////////////////
      const longestWord = (text) => {
      const wordArray = text.split(' ');
      let maxLength = 0;
      let result = '';
      for (const word of wordArray) {
         if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
         }
      }
      return result;
    }
    console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));
    ////////////////////////////////////////////////////////////////////

      

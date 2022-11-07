const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const addRemoveClassName = (evento) => {
    const elementClassTech = document.querySelector(".tech");
    elementClassTech.classList.remove('tech');
    evento.target.classList.add('tech');
    input.value = '';
};
firstLi.addEventListener("click", addRemoveClassName);
secondLi.addEventListener("click", addRemoveClassName);
thirdLi.addEventListener("click", addRemoveClassName);
// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', (evento) => {
    const elementTech = document.querySelector('.tech');
    elementTech.innerText = evento.target.value;
});
// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener("dblclick", () => {
    window.location.replace('https://github.com/wladyrjusta/wladyrJusta.github.io');
});
// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
// Segue abaixo um exemplo do uso de event.target:
myWebpage.addEventListener('mouseover', () => {
    myWebpage.style.color = 'blue';
});
myWebpage.addEventListener('mouseleave', () => {
    myWebpage.style.color = 'white';
});

const resetText = (event) => {
  event.target.innerText = 'Opção reiniciada';
  
}

firstLi.addEventListener('dblclick', resetText);

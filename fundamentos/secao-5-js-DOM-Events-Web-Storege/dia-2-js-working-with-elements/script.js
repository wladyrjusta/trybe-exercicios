let h1 = document.createElement('h1');
h1.innerText = 'Exercício - JavaScript DOM';
document.body.appendChild(h1);

let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);


let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

let p = document.createElement('p');
p.innerText = 'Estude JavaScript e crie páginas Web mais responsíveis. Melhora na interaçãp com o usuário, salvando suas principais preferências e melhorando cada vez mais a interação usuário-page';
section.appendChild(p)

let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);


let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
sectionLeft.appendChild(img);

let ul = document.createElement('ul');
sectionRight.appendChild(ul);
const arrayNumbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let num of arrayNumbers) {
    let li = document.createElement('li');
    li.innerHTML = num;
    ul.appendChild(li);
};


for (let index = 1; index < 4; index += 1) {
    let h3 = document.createElement('h3');
    main.appendChild(h3);
};

h1.className ='title';

let elementsH3 = document.querySelectorAll('h3');
elementsH3.className = 'description';

main.removeChild(sectionLeft);

sectionRight.style.marginRight = 'auto';

section.style.backgroundColor = 'green'

const ul2 = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();
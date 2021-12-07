// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body

const titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titulo);

// Adicione a tag main com a classe main-content como filho da tag body.

const principal = document.createElement('main');
principal.className = 'main-content';
document.body.appendChild(principal);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2.

const section = document.createElement('section');
section.className = 'center-content';
principal.appendChild(section);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto.

const texto = document.createElement('p');
texto.innerText = 'Algum texto kkk';
section.appendChild(texto);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2.

const section2 = document.createElement('section');
section2.className = 'left-content';
principal.appendChild(section2);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2.

const section3 = document.createElement('section');
section3.className = 'right-content';
principal.appendChild(section3);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5.

const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
section2.appendChild(image);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6.

const listaNaoOrdenada = document.createElement('ul')
section3.appendChild(listaNaoOrdenada);
let numeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let index = 0; index < numeros.length; index++) {
    let lista = document.createElement('li');
    lista.innerHTML = numeros[index];
    listaNaoOrdenada.appendChild(lista);
}

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let index = 0; index <= 2; index++) {
    const titulosh3 = document.createElement('h3');
    principal.appendChild(titulosh3);
}

// Adicione a classe title na tag h1 criada.

titulo.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas.
const titulosh3 = document.getElementsByTagName('h3');

for (let index = 0; index <= 2; index++) {
    titulosh3[index].className = 'description';
}

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild().
const sectionLeft = document.getElementsByClassName('left-content')[0];

principal.removeChild(sectionLeft);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section. 

const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight='auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde. 

const sectionCenterContent = document.getElementsByClassName('center-content')[0];

sectionCenterContent.parentNode.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.







 


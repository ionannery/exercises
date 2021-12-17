// Acesse o elemento elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "red";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Texto adicionado";

// Acesse o primeiroFilho a partir de pai.

const primeiroFilho = pai.firstChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

elementoOndeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

elementoOndeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.

pai.lastElementChild.previousElementSibling;

// Crie um irmão para elementoOndeVoceEsta.

const pai2 = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai2.appendChild(irmaoElementoOndeVoceEsta);

// "verificando se foi criado"
console.log(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.

const filhoElementoOndeVoceEsta = document.createElement('p');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// "verificando se foi criado"
console.log(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.

const FilhoDoPrimeiroFilhoDoFilho = document.createElement('p');
FilhoDoPrimeiroFilhoDoFilho.id = 'FilhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(FilhoDoPrimeiroFilhoDoFilho).innerText = 'Adicionando texto no elemento criado !';

// "verificando se foi criado"
console.log(FilhoDoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

const terceirofilho = FilhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

// "verificando acesso ao elemento"
console.log(terceirofilho);

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

// ** perguntar pro roberval amanhã na mentoria.









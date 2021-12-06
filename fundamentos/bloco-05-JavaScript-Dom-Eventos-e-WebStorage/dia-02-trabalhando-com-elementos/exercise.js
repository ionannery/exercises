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


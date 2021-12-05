
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
    
    function changeText() { 
    
        let paragraph = document.getElementsByTagName("p")[1];
        paragraph.innerHTML = "Quero ser estar trabalhando em uma empresae ganhando bem"
}
changeText();


// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
   
    function changeColor() {
    let mudarcor = document.getElementsByClassName("main-content")[0];
    
    mudarcor.style.background = "rgb(76,164,109)"

}
changeColor();

// Crie uma função que mude a cor do quadrado vermelho para branco.
    
    function changeRedToWhite() {
    let mudaRedToWhite = document.getElementsByClassName("center-content")[0];
    
    mudaRedToWhite.style.background = 'white'

}
changeRedToWhite();


// Crie uma função que corrija o texto da tag <h1>.
    
    function correctTitle() {
    let correction = document.getElementsByTagName("h1")[0];
    
    correction.innerText = "Exercício 5.1 - JavaScript";

}
correctTitle();


// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    function modifyText() {
    let paragraph = document.getElementsByTagName("p")[0];
    
    paragraph.innerText = paragraph.innerText.toUpperCase();
}
modifyText();

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
    function showAllparagraphs() {
        let allParagraphs = document.getElementsByTagName("p");

        for (let index in allParagraphs) {
            console.log(allParagraphs[index].innerHTML);
        }
    }
    showAllparagraphs();


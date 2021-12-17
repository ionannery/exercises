// Exercise 01 

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices);

// Exercise 02

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

// Exercise 03

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push("Contato");

console.log(menu);

// Exercise 04

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index++) {
    console.log(groceryList[index]);
}

// Exercise 05

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}

// Exercise 06

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

// Exercise 07

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArrays = 0;

for (let index = 0; index < numbers.length; index++) {
    somaArrays = somaArrays + numbers[index];
}

console.log(somaArrays);

// Exercise 08

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArrays = 0;
let media = 0;

for (let index = 0; index < numbers.length; index++) {
    somaArrays = somaArrays + numbers[index];
    media = (somaArrays/numbers.length);
}

console.log(media);

// Exercise 09

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArrays = 0;
let media = 0;

for (let index = 0; index < numbers.length; index++) {
    somaArrays = somaArrays + numbers[index];
    media = (somaArrays/numbers.length);
}

if(media > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.");
}

// Exercise 10 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    } 
}

console.log(maiorValor);

// Exercise 11

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] % 2 !== 0) {
        impares++;
    }
}

if(impares === 0) {
    console.log("Nenhum valor ímpar encontrado.");
} else {
    console.log(impares);  
}

 // Exercise 12

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] < menorValor) {
        menorValor = numbers[index];
    } 
}

console.log(menorValor);

// Exercise 13

let numeros = [];

for (let index = 1; index <= 25; index++) {
    numeros.push(index);
}

console.log(numeros);

// Exercise 14

let numeros = [];


for (let index = 1; index <= 25; index++) {
    numeros.push(index);
}

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
}

// Questão da aula ao vivo


// 1 - Criar um array para guardar os números sorteados
let megaSenaNumbers = [];

// 2 - Gerar 6 números aleatoriamente e guardar no array
let firstNumber = Math.floor(Math.random()*60)+1;
let secondNumber = Math.floor(Math.random()*60)+1;
let thirdNumber = Math.floor(Math.random()*60)+1;
let fourthNumber = Math.floor(Math.random()*60)+1;
let fifthNumber = Math.floor(Math.random()*60)+1;
let sixthNumber = Math.floor(Math.random()*60)+1;

// megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber]; // solução não elegante do Noel

megaSenaNumbers.push(firstNumber);
megaSenaNumbers.push(secondNumber);
megaSenaNumbers.push(thirdNumber);
megaSenaNumbers.push(fourthNumber);
megaSenaNumbers.push(fifthNumber);
megaSenaNumbers.push(sixthNumber);



// 3 - Criar a nossa sequência de jogo (dar um palpite)

let firstPlay = [6, 27, 58, 12, 7, 60]; // Guilherme Cunha
let secondPlay = [19, 32, 48, 52, 10, 25]; // Rafa Jordão
let thirdPlay = [1, 2, 3 ,4, 5 ,6]; // Thiago Medeiros
let fourthPlay = [16, 7, 14, 23, 59, 27]; // Victoria Atlas
let fifthPlay = [13, 20, 15, 28, 35, 59]; // Thiago Zardo

// 4 - Comparar cada número do palpite com cada número sorteado e contar o número de acertos

// 4.1 Criar uma repetição para testar vários jogos

let plays = [firstPlay, secondPlay, thirdPlay, fourthPlay, fifthPlay];

for (let j = 0; j < plays.length; j+=1) {
  let numberOfHits = 0;

  for (let i = 0; i < megaSenaNumbers.length; i += 1) {
    for (let n = 0; n < plays[j].length; n+=1) {
      if (megaSenaNumbers[i] === plays[j][n]) {
        numberOfHits += 1;
      }
    }
  }

  console.log("Números sorteados: " + megaSenaNumbers);
  console.log("Jogada Nº" + (j + 1) + ": " + plays[j]);
  console.log("Total de acertos: " + numberOfHits);
}










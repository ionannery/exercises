// Exercise 1

const myName = "Ionan Nery";
const birthCity = "Teresina";
let birthYear = 1996;

console.log(myName, birthCity, birthYear);

// Exercise 2

const base = 5;
let height = 8;
const area = base * height;
const perimeter = 5 + 5 + 8 + 8;

console.log(area);

// Exercise 3

const nota = 60;

if(nota >= 80) {
    console.log("Parabéns, você foi aprovado(a)")
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovado(a)");
}

// Exercise 4

const currentHour = 15;
let message = "";

if( currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço";
} else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

// Exercise 5

console.log(message);

let weekDay = "sábado";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");

} else if (weekDay === "sábado" || weekDay === "domingo"); {
    
    console.log("FINALMENTE, descanso merecido UwU!");

}

// Exercise 6

let estadoNota = "aprovada";

switch (estadoNota) {
    case "aprovada": 
    console.log("Parabéns você foi aprovado(a)!");
    break;

    case "lista": 
    console.log("Você está em nossa lista de espera");
    break;

    case "reprovada":   
    console.log("Você foi reprovado(a)");
    break;
}

// Exercise 7

const a = 4;
const b = 8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercise 8

const num1 = 10;
const num2 = 20;

if(num1 > num2) {
    console.log("O número 1 é maior que o número 2");
} else {
    console.log("O número 2 é maior que o número 1");
}

// Exercise 9

const num1 = 45;
const num2 = 50;
const num3 = 30;

if(num1 > num2 && num1 > num3) {
    console.log("O maior número é o: " + num1);
} else if (num2 > num3 && num2 > num1) {
    console.log("O maior número é o: " + num2);
} else { 
    console.log("O maior número é o: " + num3);
}

// Exercise 10

const valor = -20;

if(valor > 0) {
    console.log("O valor: " + valor + " é positivo");
} else if (valor < 0) {
    console.log("O valor: " + valor + " é negativo");
} else {
    console.log("O valor é zero");
}

// Exercise 11

const angulo1 = 40;
const angulo2 = 60;
const angulo3 = 80;

angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(angulosPositivos) {
    if(angulo1 + angulo2 + angulo3 === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Angulo incorreto !")
}

// Exercise 12

const peça = "CAVALO";

switch (peça.toLowerCase()) {
    case "peão": 
    console.log("Peão - apenas uma casa pra frente, mas na primeira jogada podem ser duas casas.");
    break;
    
    case "bispo": 
    console.log("Bispo - diagonal quantas casas puder.");
    break;
    
    case "cavalo": 
    console.log("Cavalo - anda em L e pode pular sobre as peças.");
    break;
    
    case "torre": 
    console.log("Torre - horizontal e vertical quantas casas puder.");
    break;
    
    case "rainha": 
    console.log("Rainha - diagonal, na horizontal e vertical, quantas casas puder.");
    break;
    
    case "rei": 
    console.log("Rei - uma casa pra qualquer direção.");
    break;
    
    default: 
    console.log("Não é uma peça de xadrez!")
    break;
}

// Exercise 13 

const nota = 60;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// Exercise 14

const num1 = 23;
const num2 = 41;
const num3 = 40;

let num = false;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    num = true;
};
    console.log(num);

// Exercise 15

const num1 = 12;
const num2 = 20;
const num3 = 45;

let num = false;

if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    num = true;
};

console.log(num);

// Exercise 16

const valorCusto = 40;
const valorVenda = 60;
const valorCustoTotal = valorCusto * 1.2;

if(valorCusto >= 0 && valorVenda >= 0) {
    lucro = (valorVenda - valorCustoTotal) * 1000;
} else {
    console.log("Esse valor é negativo.")
}

console.log(lucro);

// Exercise 17

let inss;
let ir;

const salarioBruto = 4000.00;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

const salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  ir = (salarioBase * 0.225) - 636.13;
} else {
  ir = (salarioBase * 0.275) - 869.36;
};

console.log("O salário líquido é: " + (salarioBase - ir));


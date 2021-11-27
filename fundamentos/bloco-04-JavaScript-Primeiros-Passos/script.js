// Primeiro exercício

const myName = "Ionan Nery";
const birthCity = "Teresina";
let birthYear = 1996;

console.log(myName, birthCity, birthYear);

// Segundo exercício

const base = 5;
let height = 8;
const area = base * height;
const perimeter = 5 + 5 + 8 + 8;

console.log(area);

// Terceiro exercício

const nota = 60;

if(nota >= 80) {
    console.log("Parabéns, você foi aprovado(a)")
} else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Você foi reprovado(a)");
}

// Quarto exercício

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

// Quinto exercício

console.log(message);

let weekDay = "sábado";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");

} else if (weekDay === "sábado" || weekDay === "domingo"); {
    
    console.log("FINALMENTE, descanso merecido UwU!");
}


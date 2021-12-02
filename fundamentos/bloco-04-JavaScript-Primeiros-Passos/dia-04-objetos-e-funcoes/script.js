// Exercise 01

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem vinda, ' + info.personagem);

  // Exercise 02 

info.recorrente = 'Sim';

console.log(info);

// Exercise 03

for (let key in info) {
    console.log(key);
}

// Exercise 04 

for (let key in info) {
    console.log(info[key]);
}


// Exercise 05 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let key in info) {
    if ( key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[key] + ' e ' + info2[key]);
    }
  }

  // Exercise 06

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }
    ]
  };

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama: " + leitor.livrosFavoritos[0].titulo);

// Exercise 07

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }
    ]
  };

leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
);

console.log(leitor.livrosFavoritos[1]); // imprimindo na tela o array adicionado.

// Exercise 08

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")

// Exercise 09

function verificaPalindrome(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
  }
  
  console.log(verificaPalindrome('ovo'));
  
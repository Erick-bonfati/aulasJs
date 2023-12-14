// A função math serve para algumas determinadas ações

let num1 = 9.43252
let num2 = Math.floor(num1); //Arredonda o valor para baixo, no nosso caso ficaria 9.
// let num2 = Math.ceil(num1); Arredonda o valor para cima, no caso ficaria 10
// let num2 = Math.round(num1); Arredonda para baixo ou para cima do valor mais próximo
console.log(num2)

console.log(Math.max(1,2,3,4,5,6,7,8,100,1000,14500)); // Pega o maior numero dessa sequência
console.log(Math.min(1,2,3,4,5,6,7,8,100,1000,14500)); // Pega o menor numero dessa sequência

//console.log(Math.random()); // Gera um número aleatorio

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);  // Pega um número aleatorio entre um numero e outro, nesse caso é entre 5 e 10
console.log(aleatorio);

// Para pegar a raiz quadrada de um número:

console.log(num1 ** (1/2));

// é possivel dividir um número por zero no JS, e o resultado sempre vai ser Infinity

console.log(100 / 0.00000000001);
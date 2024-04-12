// Filter - Filtrando o array -> Sempre vai retornar um array com a mesma quantidade de elementos ou menos que o array original.

// Retorna os números maiores que 10

//const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];

// function maiores() {
//     for( let numero of numeros) {
//         if (numero > 10) {
//             console.log(numero);
//         }
//     };
// }

// console.log(maiores());

// Com filter fazemos assim:

//               0  1   2   3  4...
//const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];

// O filter precisa que você retorne um valor booleano, true para aparecer e false para não aparecer

//function callbackFilter(valor) {
    // if (valor > 10) {
    //     return true;
    // } else {
    //     return false;
    // }

    // Quando de tem uma condição que precisa retornar verdadeiro ou falso, nunca retorna true ou false, e sim a própria condição
    //return valor > 10; // executando assim temos exatamente a mesma coisa
//}

// chamamos um método que recebe uma função de callback com '.filter' que passa em cada array
// const numerosFiltrados = numeros.filter(function(valor) { // passa pro filter executar essa função, com os filtros que passamos na função
//     return valor > 10; //  ou podemos retornar o valor direto com uma função anonima
// }); 


// Com arrow function
// const numerosFiltrados = numeros.filter(valor => {
//     return valor > 10;
// });

// E simplificando mais ainda
//const numerosFiltrados = numeros.filter(valor => valor > 10); // passamos um arrowFunction o valor e a condição, e quando só temos uma linha,
// o retorno é implicito

//console.log(numerosFiltrados); // Retorna como um array: [ 50, 80, 11, 15, 22, 27 ]


// Retorna as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 63 },
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Filter retorna um nome array
// const pessoaNome5 = pessoas.filter(function(obj) { // o parametro que passamos é o objeto que está dentro do array
//     console.log(obj.nome); // escolhemos qual atributo do objeto vamos selecionar '.atributo'
// });

//Com arrowFunction                 função de callback
const pessoaNome5 = pessoas.filter(obj => obj.nome.length >= 5);

console.log(pessoaNome5);

//Com mais de 50 anos
const pessoaIdade50 = pessoas.filter(obj => obj.idade > 50);

console.log(pessoaIdade50);

//Cujo nome termina com a
const pessoasNomeA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); // faz com que todas as letras que termina com 'a' seja minuscula

console.log(pessoasNomeA);
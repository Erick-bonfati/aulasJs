// Array ( básico )

               // 0         1       2    = os indices dos arrays funcionam me maneira diferente, cada string ou dado diferente é um indice,
// independente do tamanho

const alunos = ['Luiz', 'Maria', 'Joao']; // isso é um array, é como fazer uma lista dentro de tuplas, sempre faça arrays do mesmo tipo de dados

alunos.push('Fernando'); // Adiciona esses valores para o array, adiciona no fim
alunos.push('Fabio');

delete alunos[2]; // Remove um indice especifico, porém ele deixa o indice removido vazio

const removidoFinal = alunos.pop(); // Remove o elemento final e salva numa variavel
const removidoComeco = alunos.shift(); // Remove o elemento do começo e salva num variavel
// console.log(alunos[50]); Caso o indice selecionado não exista ele vai dar como resposta padrão: undefined
// alunos.pop(); Remove o elemento do final do array
console.log(alunos.slice(0, 3)); // Seleciona somente os indices indicados e o ultimo indice não conta
console.log(removidoFinal)
console.log(removidoComeco)
console.log(alunos)


alunos.unshift('Rods'); // Adiciona no começo, porém não substitui

console.log(alunos.length);  // Ele conta quantos indices tem o seu array

// alunos[0] = 'Eduardo'; // Substitui o nome pelo selecionado
// alunos[3] = 'Luiza'; // Caso o indice não exista ele cria um para aparecer no array, o problema é você vai ter que saber qual o último indice, ele altera também

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);

//Array no javascript é considerado OBJECT

console.log(alunos instanceof Array); // Pergunta se a variavel selecionada é um array ou não


// const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =).
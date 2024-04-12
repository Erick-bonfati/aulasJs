// For in - Estrutura de repetição


// For in = ele serve para Ler os INDICES ou chaves do objeto

//                0        1        2
// const frutas = ['maçã', 'banana', 'uva']

// for ( let indice in frutas) { // diferente do for normal, esse conta os indices
//     console.log(frutas[indice]);
// }

// Com um objeto:

// OBJETOS SÃO COISAS DO MUNDO REAL QUE PODEMOS DAR ATRIBUTOS OU MÉTODOS PARA ELES
const pessoa = {
    nome: 'erick',
    sobrenome: 'bonfati',
    idade: 18
};

// para acessar o valor da variavel dentro do objeto

// console.log(pessoa.nome); // OBJETO
// console.log(pessoa['nome']); // ARRAY

// Esse é um método útil pois as vezes precisamos pegar essa propriedade de forma dinamica dentro do nosso sistema/site


for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
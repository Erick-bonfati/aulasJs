/*
    Objects.values
    Objects.entries
    Object.assign(des, any)
    Object.getOwnPropertyDescriptor(o, 'prop')
    ... (spread)

    // Já vimos

    Object.keys (retorna as chaves)
    Object.freeze(congela o objeto)
    Object.defineProperties(define vários propriedades)
    Object.defineProperty(define uma propriedade)
*/


// const produto = {nome: 'Caneca', preco: 1.8};
// const outraCoisa = produto;

// const caneca = { // criamos um objeto e copiamos a variavel 'produto' para ela e também criamos um novo objeto
//     ...produto,
//     material: 'porcelana'
// };

// const caneca = Object.assign({}, produto, {material: 'porcelana'}); // passamos um objeto vazio e copiamos os dados de 'produto' e passamos para cá

// produto.nome = 'Luiz otávio';

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);

// console.log(outraCoisa);


const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'};

// Object.defineProperty(produto, 'nome', { // substituindo as propriedades do objeto
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// });

//console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // pega todas informações de propriedades do objeto

//produto.nome = 'Outra coisa';


//console.log(produto);


console.log(Object.values(produto)); // passa somente o valor do seu objeto dentro de um array e fora de chaves {}

for (let valor of Object.entries(produto)){ // coloca um array com dois objetos
    console.log(valor[0], valor[1]); // para cada repetição, mandamos o indice 0 e indice 1
}



// Map - Mapeando o array - muito similar ao filter, só muda o retorno final

// Map - altera os valores do meu array, mas não muda o valor original


//Dobre os numeros..

//                 0   1   2  3  4  5....
//const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map( function(valor) { // aqui vamos retornar o valor com um valor diferente
//     return valor * 2; // aqui temos o valor do array que é o dobro do valor original
// });

// const numerosEmDobro = numeros.map(valor => valor * 2);

//console.log(numerosEmDobro);


// Para cada elemento:


const pessoas = [
    { nome: 'Luiz', idade: 63 },
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];


//Retorne apenas uma string com o nome da pessoa 

const nomes = pessoas.map(obj => obj.nome); // mapeamos para voltar somente o nome da pessoa

console.log(nomes);



//Remova apenas a chave 'nome' do objeto

// const idades = pessoas.map(function(obj){
//     delete obj.nome; // deleta a chave nome do objeto
//     return obj;
// });

//Resumindo com arrowFunction

const idades = pessoas.map(obj => ({idade: obj.idade})); // colocamos entre parenteses para não referenciar as chaves como uma função normal

console.log(idades); 



//Adicione uma chave id em cada objeto

// const chaveId = pessoas.map(function(obj, indice) { // o identificador do JS sabe que primeiro pegamos o objeto em si, depois o indice desse objeto
//     obj.id = indice; // cria um objeto com nome de ID, pegando o numero do indice desse objeto

//     return obj;
// });

// console.log(chaveId);


// Só tem um problema da maneira que estamos fazendo, é que estamos modificando o objeto original em cada nova variavel, para não precisar modificar
// a variavel original, nós criamos outra variavel dentro da função desse objeto que estamos manipulando, ex:

const chaveId = pessoas.map(function(obj, indice) { 
    const newObj = {...obj}; // fazemos uma cópia do objeto em um novo objeto

    newObj.id = indice; 

    return newObj;
});

console.log(chaveId);
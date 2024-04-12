// Estrutura de dados - map

const pessoas = [
    {id: 3, nome: 'erick'},
    {id: 2, nome: 'maria'},
    {id: 1, nome: 'joao'}
];

const novasPessoas = {};

for(const pessoa of pessoas) {
    
    //Pega o ID de pessoa
    const {id} = pessoa;
    //Vamos fazer o ID ser a chave do objeto
    novasPessoas[id] = { ...pessoa};
}

console.log(novasPessoas); // Aqui ocorrem dois problemas, primeiro é que retorna o identificador como uma string e segundo é a ordem que foi retornado
// antes era 3,2,1... , agora é 1,2,3..., isso porque o JAVASCRIPT usa uma ordem crescente para numeros...


//Então para corrigir isso vamos precisar uma map


const pessoas2 = [
    {id: 3, nome: 'erick'},
    {id: 2, nome: 'maria'},
    {id: 1, nome: 'joao'}
];

const novasPessoas2 = new Map();

for(const pessoa of pessoas2) {
    const {id} = pessoa; // o id, passa a ser também o nosso identificador
    // primeiro vamos setar os valores que vamos pegar e depois get
    novasPessoas2.set(id, {...pessoa}) // primeiro a chave que queremos pegar, e depois o valor que queremos colocar neste map
}

console.log(novasPessoas2);
console.log(novasPessoas2.get(2)); // para pegar somente a pessoa 2

// Vamos iterar sobre o map pessoas

// agora para cada pessoa temos um array
for (const pessoa of novasPessoas2) {
    console.log(pessoa);
}

// e agora vamos desestruturar o map
for (const [identifier, {id, nome}] of novasPessoas2) { // primeiro passamos o identificador, e dentro de chaves {} nossas informações de id e nome
    console.log(identifier, id, nome);
}

//Pegando somente o identificador
for (const identificador of novasPessoas2.keys()) {
    console.log(identificador);
}

//Pegando somente o o valor -- retorna cada um dentro de chaves
for (const pessoas of novasPessoas2.values()) {
    console.log(pessoas); 
}

// Eliminar a chave 2
novasPessoas2.delete(2);
console.log(novasPessoas2);

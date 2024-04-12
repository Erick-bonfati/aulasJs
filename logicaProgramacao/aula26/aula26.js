// Atribuição via desestruturação (Objetos)

const pessoa = { // aqui criamos um objeto com informações de uma pessoa
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: { // é bem normal criar um objeto dentro de outro objeto no JS
        rua: 'Av Brasil',
        numero: 320
    }
} 


//const nome = pessoa.nome; // estamos passando uma informação do objeto para uma variavel
//console.log(nome);

// usando atribuição via desestruturação:

//const { nome } = pessoa; //como estamos criando uma variavel que é exatamente o mesmo nome da informação dentro do objeto só usamos chaves
// em resumo pedimos para criar um variavel com este nome e também pedimos para procurar este mesmo nome dentro do objeto que escolhermos.
//console.log(nome);

//podemos também usar mais de uma variavel
// Caso o nome ou valor que você passar não exista no objeto ele vai ficar como "undefined"
//const { nome, sobrenome, idade } = pessoa; 

// e para não aparecer undefined usamos '' 

//const {nome = '', sobrenome, idade } = pessoa;

const {nome: teste = '', sobrenome, idade } = pessoa; // aqui substituimos o nome da variavel dentro do objeto, no objeto vai ficar o mesmo nome
// mas na variavel vai ser 'teste'


console.log(teste, sobrenome, idade);

// Para selecionar um objeto dentro de outro objeto:

//const {endereco: {rua, numero} } = pessoa; // selecionamos o objeto dentro do outro objeto e pegamos as informações desejadas

const {endereco: {rua: r = 12345, numero}, endereco } = pessoa; // podemos manipular as informações desses objetos também

// pegando o resto das informações do objeto: 

const {nome, ...resto} = pessoa;

console.log(nome, resto);

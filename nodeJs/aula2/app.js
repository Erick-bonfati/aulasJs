
// const multiplicacao = require('./mod');

// console.log(multiplicacao(2, 2));


// const cachorroMod1 = require('./B/C/D/mod') //exportando a classe dentro de varios outros arquivos

// const cachorrinho = new cachorroMod1('Golden retriever') // atribuindo os parametros da classee

// cachorrinho.latir() // exibindo um método da classe


const cachorroMod2 = require('./Z/mod2')

const cachorrinho2 = new cachorroMod2('Pitbull')

cachorrinho2.latir()


//Temos duas variaveis no node que se chama:

console.log(__filename); // para buscar o nome do arquivo atual
console.log(__dirname); // para buscar o nome da pasta atual

// vamos usar um exemplo de um servidor que a gente não sabe em que servidor ele vai rodar

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')) // resolva o path, pegue o nome da pasta atual e volte duas pasta a partir 
//desta pasta, depois disso entre na pasta arquivos e depois na pasta 'imagens'
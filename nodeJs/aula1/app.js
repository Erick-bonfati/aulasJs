
// Vamos exportar as coisas do módulo 1
//const mod1 = require('./mod1');

//const falaNome = mod1.falaNomeCompleto();

const { nome, sobrenome, falaNomeCompleto} = require('./mod1'); // Usando desestruturação, para remover os objetos das chaves

//const sobrenome = require('./mod1').sobrenome; // exportando somente uma chave especifica

//console.log(mod1) // executando, nós temos exatamente tudo que exportamos do módulo 1, em forma de objeto

console.log(falaNomeCompleto());

// Exportando uma classe 

const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Luiz');

console.log(p1)

//Módulos que são do NODE nós não passamos o caminho com './nomeMod', nós somente passamos o nome do caminho

const path = require('path');

// Para instalar o axios no nosso arquivo fazemos:

// O 'NPM' é o gerenciador de pacotes do node

// npm init -y para começar o 'npm'

// npm instal axios

//Chamando o caminho axios

const axios = require('axios');

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json') // nesse caso não vai funcionar pois está pagina web não existe mais
//     .then( response => console.log(response.data)) // resolvendo a promise
//     .catch(e => console.log(e)); // rejeitando a promise

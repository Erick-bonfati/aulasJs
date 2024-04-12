const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController') 

function meuMiddle(req,res, next) {
    // Podemos usar session para salvar algum dados especifico quando o cliente faz a requisição
    req.session = { nome: 'Luiz', sobrenome: 'Miranda'}; // Assim atrelando uma requisição ao middle, estamos por exemplo: salvando dados de um cliente
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next(); // next, usamos para enviar a próxima requisição
}

// Rotas da home
route.get( '/', meuMiddle, homeController.paginaInicial, function(req, res, next) { // aqui estamos trabalhando o middleware numa rota especifica,
// precisamos estar no get e na rota da home
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`Olha o que tem na req.session.nome: ${req.session.nome}`);
} );
route.post('/', meuMiddle, homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;

// Middleware é muito poderoso, pois podemos fazer coisas no meio do caminho da requisição, ou antes de responder o cliente ou depois...

// Mas não vamos usar isso, vamos trabalhar a nivel de server agora, a nivel de TODAS AS ROTAS que forem requisitadas vão passam pelo nosso middleware
const express = require('express'); // chamando o express
const route = express.Router(); // Podemos usar isso aqui como uma rota, pra deixar nosso código principal um pouco menor
const homeController = require('./controllers/homeController') // exportando o Js homeController dos controllers
const contatoController = require('./controllers/contatoController')  // exportando o Js contatoController dos controllers

module.exports = route; // estamos exportando a nossa rota

// vamos pegar o código a postagem do nosso server e vamos passar aqui
// depois vamos criar um controller para cada coisa especifica que quisermos

//Rotas da home page
route.get( '/', homeController.paginaInicial);

route.post('/', homeController.trataPost);

// Rotas da pagina de contato

route.get('/contato', contatoController.paginaInicial)
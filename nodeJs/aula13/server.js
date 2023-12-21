const express = require('express')
const app = express();
const routes = require('./routes')
const path = require('path')
const { middleWareGlobal, outroMiddleware } = require('./src/middlewares/middleware') // importando middleware

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

//Nosso próprio middleware
app.use(middleWareGlobal); // estamos passando o middleware para todas as rotas que fizermos, // EXECUTANDO MIDDLEWARE
app.use(outroMiddleware);

app.set('views', path.resolve(__dirname, 'src', 'views')); 

app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});


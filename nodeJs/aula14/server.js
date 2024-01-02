require('dotenv').config(); //para receber nossos dados do banco de dados de senha e usuario e não deixa no repositório

const express = require('express')
const app = express();

// Para fazer a conexão com a base de dados
//Precisamos emitir falando que a base de dados está conectada, agora podemos começar a escutar cortes
const mongoose = require('mongoose');      
                                                       
mongoose.connect(process.env.CONNECTIONSTRING) //Serve para fazer a conexão com o banco utilizando suas informações, isso retorna uma promise
    .then(() => { //Aqui no then vamos fazer o "app" emitir um sinal para dizer que conectamos no banco
        app.emit('pronto') // é como dizer que estamos prontos para conexão, mas ainda precisamos capturar esse evento
    })
    .catch(e => console.log(e)); //aqui poderiamos enviar um rota que manda o cliente para o erro


const routes = require('./routes')
const path = require('path')
const { middleWareGlobal, outroMiddleware } = require('./src/middlewares/middleware') // importando middleware

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

//Nosso próprio middleware
app.use(middleWareGlobal); // estamos passando o middleware para todas as rotas que fizermos, // EXECUTANDO MIDDLEWARE
app.use(outroMiddleware);

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(routes);


app.on('pronto', () => { // aqui capturamos o evento do sinal, e quando ele estiver com 'STATUS' = 'pronto', nós iniarmos o servidor
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
})



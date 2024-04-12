require('dotenv').config(); //para receber nossos dados do banco de dados de senha e usuario e não deixa no repositório

const express = require('express')
const app = express();

// Para fazer a conexão com a base de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e)); //aqui poderiamos enviar um rota que manda o cliente para o erro


//Para salvar a session, mongo e flash na memória
const session = require('express-session');
const MongoStore = require('connect-mongo'); // Conectamos o mongo
const flash = require('connect-flash');


const routes = require('./routes')
const path = require('path')

//Importando o helmet e csurf, é como um módulo de segurança do express
const helmet = require('helmet')
const csrf = require('csurf');

const { middleWareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware') // importando middleware

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

//Aqui vamos configurar a seção
const sessionOptions = session({
    secret: 'Este é meu código secreto!',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING}), //Fazendo a conexão do mongo com nosso banco de dados
    resave: false,
    saveUninitialized: false,
    cookie: { // Aqui vamos colocar a duração máxima que este cookie vai durar
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true 
    },
})

app.use(sessionOptions);
app.use(flash()); //Envia uma função executada

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(csrf()); // Passamos o csurf antes do middleware e das rotas, e agora vamos precisar de dois middlewares, para injetar o token em todas as
// páginas e checar de se não tem nenhum erro de csrf para a gente parar a execução do código ali
//Nosso próprio middleware
app.use(middleWareGlobal); // estamos passando o middleware para todas as rotas que fizermos, // EXECUTANDO MIDDLEWARE
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.on('pronto', () => { // aqui capturamos o evento do sinal, e quando ele estiver com 'STATUS' = 'pronto', nós iniarmos o servidor
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
})



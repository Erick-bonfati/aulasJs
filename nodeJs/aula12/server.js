const express = require('express')
const app = express();
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true})); // sempre usar isso por primeiro

app.use(express.static(path.resolve(__dirname, 'public'))); // pegando a nossa pasta statica, 'public'

app.set('views', path.resolve(__dirname, 'src', 'views')); // pegando a pasta de views com path (caminho absoluto), podemos também pegar o caminho
//normal ./nomePasta/...

app.set('view engine', 'ejs') // aqui passamos qual engine o views vai usar para renderizar as coisas na página, (neste seção vamos usar o "ejs")

app.use(routes); // pedimos para o expressar usar as rotas do 'ROUTES'

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});


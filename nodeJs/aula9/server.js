
const express = require('express')

const app = express();


app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

// Primeiro passamos a página do conteudo, depois '/:' para indicar o parametro que vamos receber após a barra e por último usamos " ? " para dizer
// que o parametro enviado é opcional, o retorno no servidor é voltado como um "OBJETO"
app.get('/profile/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query); 
    res.send(req.params);
});

// Quando o usuario posta alguma coisa, podemos pedir para o req.body tratar isso e retornar um OBJETO do que foi postado
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`)
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});
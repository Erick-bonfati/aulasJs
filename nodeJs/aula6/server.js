// O express é um micro-framework que vai te ajudar a trabalhar com a web

// Nesta aula vamos focar somente no método get, para carregar páginas no nosso navegador, e dai o express vai nos ajudar a trabalhar nas rotas
// destas aplicação:

//ex: http://meusite.com/ <- GET - Entregue a página ( " / " ), só de usar a barra no final, estamos fazendo um get e pedindo para o navegador
// entregar a página, o express vai ficar responsável por saber qual página o servidor vai te entregar depois

// ex: http://meusite.com/sobre <- GET - Me entregue a página /sobre
// ex: http://meusite.com/sobre <- GET - Me entregue a página /contato

// TEMOS AS OPERAÇÕES CRUD QUE FUNCIONA ASSIM:

/*
         Criar   Ler   Atualizar  Deletar  
CRUD ->  CREATE, READ, UPDATE,    DELETE
         POST    GET   PUT        DELETE --> Esses são os métodos que encontramos no EXPRESS

Essas são operações que a gente tende a fazer numa API, então quando a gente criar uma api o nosso servidor deve ser capaz de fazer:

Criar alguma coisa(POST), Ler alguma coisa(GET), Editar alguma coisa(PUT), Apagar alguma coisa(DELETE)
*/


// Para importar o express:
const express = require('express')

const app = express();

// Assim já carregamos o express

app.get( '/', (req, res) => { // O primeiro parametro é a rota que ele vai seguir, e o segundo é uma função que vai receber dois parametros: 
// a requisição e a resposta, é como falar, o usuario fez uma requisição GET para a página tal, e a resposta é o que eu vou mandar para o servidor
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="">
    <button>Enviar</button>
    </form>
    `) // isso vai ser a resposta para quando acessarem a página principal do meu site
}) 

app.post('/', (req, res) => { // quando a gente enviar o formulário do get, vai cair aqui no post, o post serve para criar alguma coisa, seja uma
    // resposta, uma nova página, um texto...
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!')
})

// Agora precisamos passar uma porta para executar isso
// Uma porta é referente a um processo que está sendo executado no seu servidor, então se você tentar rodar um express numa porta que está
// em processo vai gerar um erro, normalmente e porta 3000, 3333 não ficam em uso

app.listen(3000, () => { // passamos a porta que o aplicativo vai ser executado, e depois uma função para mostrar que estamos executando alguma coisa
    console.log('Acessar http://localhost:3000') // localhost é nossa máquina atual, e o " :3000 " é a porta que estamos executando isso
    console.log('Servidor executando na porta 3000')
})

// Para navegar por este site que criamos, NÃO CLICAMOS NO "RUN CODE", CTRL + ALT + N = parar code run

// Para iniciar este servidor, podemos pegar o caminho da pasta, ir no TERMINAL da nossa pasta, e rodar por lá:

// node server.js
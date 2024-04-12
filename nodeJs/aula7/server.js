
const express = require('express')

const app = express();


app.get( '/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="">
    <button>Enviar</button>
    </form>
    `)
}) 

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})


// PARA FAZER COM QUE NOSSO EXPRESS ATUALIZE AUTOMATICAMENTE, VAMOS INSTALAR UMA DEPENDENCIA "NODEMON"

// npm intall nodemon --save-dev

// E para executar ele usamos: npx nodemon server.js -> (nome do arquivo)

// Ou podemos ir no package.json, nas dependencias e lá colocamos assim: "start": "nodemon server.js"
// e assim é só rodar no terminal: npm start



const express = require('express')

const app = express();

// http://facebook.com/profiles/5 - sempre que entramos num perfil do facebook, no fim ele coloca por exemplo o id do usuario, isso é algo que varia
// de usuario para usuario, no express chamamos isso de - url.params

//Utilizamos o use para ele conseguir tratar o req.body das requisições, assim conseguimos ver no servidor qual foi o envio do usuario
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get( '/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
});

// Primeiro passamos a página do conteudo, depois '/:' para indicar o parametro que vamos receber após a barra e por último usamos " ? " para dizer
// que o parametro enviado é opcional, o retorno no servidor é voltado como um "OBJETO"
app.get('/profile/:idUsuarios?/:parametro?', (req, res) => { // redireciona para outra página, com nome de testes e passando o parametro que 
// vai ser o idUsuario, e neste ID nós vamos vai nos mandar para a página, e assim nós salvamos o objeto "ID" dentro do nosso sistema no "terminal"
    console.log(req.params); // exibe nosso parametro recebido no nosso servidor 'terminal'
    console.log(req.query); // para executar ele nós vamos na pagina e passamos os objetos lá, ex: /testes/?nome='erick'&sobrenome='bonfati'
    res.send(req.params); // a página vai retornar os parametros solicitados no get, podemos também escolher somente um desses parametros para retornar
    //res.send(req.params.idUsuarios); // neste caso vai exibir somente o parametro que pedimos
});

// Quando o usuario posta alguma coisa, podemos pedir para o req.body tratar isso e retornar um OBJETO do que foi postado
app.post('/', (req, res) => {
    console.log(req.body); // aqui estamos pegando o valor que foi recebido no corpo da requisição
    res.send(`O que você me enviou foi: ${req.body.nome}`) // o req.body.nome vai ser o nome que recebemos dentro do input, o " name="nome" "
    // assim ele mostra o que foi enviado lá
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});
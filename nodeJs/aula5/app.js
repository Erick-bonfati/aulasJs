// Escrevendo e lendo arquivos
const path = require('path')

const caminhoArquivo = path.resolve(__dirname, '.','teste.json');

const escreve = require('./modules/escrever')

const ler = require('./modules/ler')

// Criando e converte um objeto para json

// const pessoas = [
//     {nome: 'Erick'},
//     {nome: 'Fernando'},
//     {nome: 'Maria'},
//     {nome: 'Camila'},
//     {nome: 'Antonio'},
//     {nome: 'Amanda'},
// ]

// const json = JSON.stringify(pessoas, '', 2) // converte nosso array para json e formata para cada array dar dois enters um do outro

// escreve(caminhoArquivo, json) // estamos passando os parametros do exports lá do outro arquivo, e aqueles arquivos realizam o que pedimos

async function leArquivo(caminho) { // função para ler e return os dados do arquivo
    const dados = await ler(caminho); // espera um promise
    renderizaDados(dados); // retorna outra função
}

function renderizaDados(dados) { 
    dados = JSON.parse(dados); // convertemos o arquivo Json para array novamente
    dados.forEach(val => console.log(val.nome)) // para cada array(dado), exiba a chave "nome" desse objeto
}

leArquivo(caminhoArquivo);

// const dadosArquivo = leArquivo(caminhoArquivo)
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// Isso que nós fizemos é muito útil para caso a gente queria buscar alguma informação menor dentro da nossa aplicação
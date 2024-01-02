const HomeModel = require('../models/HomeModel') //Não executamos isso como 'nodemon' pois a cada vez que executarmos ele vai criar um dado na base de
//dados novamente

//Nossas base de dados e coisa vão estar dentro do nosso atlas 'MongoDB'
//Assim que pedirmos para o mongoose criar uma base de dados ela já vai adicionar tudo lá dentro do "ATLAS", para fazer isso fazemos:
HomeModel.create({ //Isso aqui nos retorna uma promise e ele vai retornar o documento criado abaixo e o id, usamos then para capturar as informações
    titulo: 'Outro titulo qualquer',
    descricao: 'Outra descrição qualquer'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e)); //Para ver o que foi criado, podemos ir no 'ATLAS' e verificar por lá
// E a partir do que criamos acima, podemos substituir as informações por novas e adicionar ao Banco novamente, os dados antigos já foram salvos lá

//Podemos também buscar esse dados diretamenta no nosso terminal, fazemos assim:
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return; // usamos para dizer que não vamos retornar nada depois disso
};

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}
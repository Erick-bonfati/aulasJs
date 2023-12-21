exports.paginaInicial = (req,res) => {
    res.render('index') // aqui estamos rendeziando o nosso "view (Ejs)" - só colocamoso  nosso do arquivo e ele já identifica
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
}
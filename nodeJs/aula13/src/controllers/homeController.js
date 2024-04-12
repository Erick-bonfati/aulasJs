exports.paginaInicial = (req, res) => {
    res.render('index');
    return; // usamos para dizer que não vamos retornar nada depois disso
};

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}